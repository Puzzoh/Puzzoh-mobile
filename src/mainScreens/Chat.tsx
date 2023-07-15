import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles, { colors } from "../styles/index";
import { GiftedChat } from "react-native-gifted-chat";
import { gql, useMutation, useQuery } from "@apollo/client";
import { getChatRoom } from "../graphql/queries";
import { createMessage } from "../graphql/mutations";
import { Auth } from "aws-amplify";

export default function Chat({ navigation, route }) {
  const chatroomID = route?.params?.chatroomID;

  const GET_CHATROOM_INFO = gql(getChatRoom);
  const { data } = useQuery(GET_CHATROOM_INFO, {
    variables: {
      id: chatroomID,
    },
  });

  const [chatRoom, setChatRoom] = useState(null);

  const [text, setText] = useState("");

  const CREATE_MESSAGE = gql(createMessage);
  const [createMessageMutation] = useMutation(CREATE_MESSAGE);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadChatMessages();
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  const loadChatMessages = () => {
    // const chatMessages = [
    //   {
    //     _id: 1,
    //     text: "Hello!",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 1,
    //       name: "John Doe",
    //     },
    //   },
    //   {
    //     _id: 2,
    //     text: "Hi there!",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: route.params.name,
    //     },
    //   },
    // ];

    const chatMessages = data?.getChatRoom.Messages.items;
    setMessages(chatMessages);
  };

  const onSend = async (message) => {
    const currUser = await Auth.currentAuthenticatedUser();

    const newMessage = {
      text,
      chatroomID,
      userID: currUser.attributes.sub,
    };

    await createMessageMutation({
      variables: {
        input: newMessage,
      },
    });

    setText("");

    setMessages((prevMessages) => GiftedChat.append(prevMessages, message));
  };

  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1,
          }}
          onInputTextChanged={setText}
        />
      </View>
    </View>
  );
}

const chatStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chatContainer: {
    flex: 1,
  },
  backButton: {
    marginTop: 10,
    alignSelf: "center",
    padding: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
});

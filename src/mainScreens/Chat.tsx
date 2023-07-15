import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles, { colors } from "../styles/index";
import { GiftedChat } from "react-native-gifted-chat";
import { gql, useMutation, useQuery } from "@apollo/client";
import { getChatRoom, listMessagesByChatRoom } from "../graphql/queries";
import { createMessage, updateChatRoom } from "../graphql/mutations";
import UserContext from "../context/UserContext";

export default function Chat({ navigation, route }) {
  const chatroomID = route?.params?.chatroomID;

  const currUser = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState(null);
  const [text, setText] = useState("");

  const GET_CHATROOM_INFO = gql(getChatRoom);
  const { loading, error, data } = useQuery(GET_CHATROOM_INFO, {
    variables: {
      id: chatroomID,
    },
  });

  const LIST_MESSAGES = gql(listMessagesByChatRoom);
  const {
    loading: messageLoading,
    error: messageError,
    data: messageData,
  } = useQuery(LIST_MESSAGES, {
    variables: {
      chatroomID,
      sortDirection: "DESC",
    },
  });

  const UPDATE_CHATROOM = gql(updateChatRoom);
  const [updateChatroomMutation] = useMutation(UPDATE_CHATROOM);

  const CREATE_MESSAGE = gql(createMessage);
  const [createMessageMutation] = useMutation(CREATE_MESSAGE);

  useEffect(() => {
    if (loading) {
      navigation.setOptions({ title: "Loading..." });
    } else if (data && data.getChatRoom) {
      setChatroom(data.getChatRoom);
    }
  }, [data]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  useEffect(() => {
    if (messageLoading) {
      navigation.setOptions({ title: "Loading..." });
    } else if (messageData) {
      let giftedChatMessages = messageData.listMessagesByChatRoom?.items.map(
        (chatMessage) => {
          let gcm = {
            _id: chatMessage.id,
            text: chatMessage.text,
            createdAt: chatMessage.createdAt,
            user: {
              _id: chatMessage.userID,
            },
          };
          return gcm;
        }
      );
      setMessages(giftedChatMessages);
    }
  }, [chatroomID]);

  const onSend = async () => {
    const newMessage = {
      text,
      chatroomID,
      userID: currUser.id,
    };

    const newMessageData = await createMessageMutation({
      variables: {
        input: newMessage,
      },
    });

    await updateChatroomMutation({
      variables: {
        input: {
          _version: chatroom._version,
          chatRoomLastMessageId: newMessageData.data.createMessage.id,
          id: chatroomID,
        },
      },
    });

    setText("");
  };

  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.chatContainer}>
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: currUser.id,
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

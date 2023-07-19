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
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { getChatRoom, listMessagesByChatRoom } from "../graphql/queries";
import { createMessage, updateChatRoom } from "../graphql/mutations";
import { onCreateMessage } from "../graphql/subscriptions";
import UserContext from "../context/UserContext";

export default function Chat({ navigation, route }) {
  const chatroomID = route?.params?.chatroomID;

  const currUser = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState(null);
  const [text, setText] = useState("");

  const GET_CHATROOM_INFO = gql(getChatRoom);
  const { loading: chatroomLoading, data: chatroomData } = useQuery(
    GET_CHATROOM_INFO,
    {
      variables: {
        id: chatroomID,
      },
    }
  );

  const LIST_MESSAGES = gql(listMessagesByChatRoom);
  const {
    loading: messageLoading,
    error: messageError,
    data: messageData,
    refetch: refetchMessages,
  } = useQuery(LIST_MESSAGES, {
    variables: {
      chatroomID,
      sortDirection: "DESC",
    },
  });

  const [updateChatroomMutation] = useMutation(gql(updateChatRoom));
  const [createMessageMutation] = useMutation(gql(createMessage));
  const { data: newMessageData } = useSubscription(gql(onCreateMessage));

  useEffect(() => {
    if (chatroomData) {
      setChatroom(chatroomData.getChatRoom);
    }
  }, [chatroomData]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  useEffect(() => {
    if (messageData) {
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
  }, [messageData]);

  useEffect(() => {
    if (newMessageData) {
      const newMessage = newMessageData.onCreateMessage;
      const giftedChatMessage = {
        _id: newMessage.id,
        text: newMessage.text,
        createdAt: newMessage.createdAt,
        user: {
          _id: newMessage.userID,
        },
      };
      setMessages((prevMessages) =>
        GiftedChat.append(prevMessages, [giftedChatMessage])
      );
    }
  }, [newMessageData]);

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

    // const giftedChatMessage = {
    //   _id: newMessageData.data.createMessage.id,
    //   text: newMessage.text,
    //   createdAt: newMessageData.data.createMessage.createdAt,
    //   user: {
    //     _id: newMessage.userID,
    //   },
    // };

    // setMessages((prevMessages) =>
    //   GiftedChat.append(prevMessages, [giftedChatMessage])
    // );
    refetchMessages();
  };

  if (chatroomLoading || messageLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles, { colors } from "../styles/index";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat({ navigation, route }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadChatMessages();
  }, []);

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  const loadChatMessages = () => {
    const chatMessages = [
      {
        _id: 1,
        text: "Hello!",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "John Doe",
        },
      },
      {
        _id: 2,
        text: "Hi there!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: route.params.name,
        },
      },
    ];
    setMessages(chatMessages);
  };

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
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

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/index";

export default function ChatWindow({ user, closeChat }) {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    console.log(`Sending message "${message}" to user ${user.id}`);
    setMessage("");
    setIsTyping(false);
  };

  const handleTyping = (text) => {
    setMessage(text);
    setIsTyping(text !== "");
  };

  return (
    <Modal isVisible={true} onBackdropPress={closeChat}>
      <View style={chatStyle.container}>
        <Text style={chatStyle.header}>Chat with User #{user.id}</Text>
        <View style={chatStyle.messageContainer}>
          <Text style={chatStyle.messageText}>{message}</Text>
          {isTyping && <Text style={chatStyle.typingIndicator}>...</Text>}
        </View>
        <TextInput
          style={chatStyle.input}
          value={message}
          onChangeText={handleTyping}
          placeholder="Type your message here..."
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          style={chatStyle.sendButton}
        >
          <Text style={chatStyle.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const chatStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  messageText: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
  },
  typingIndicator: {
    fontSize: 16,
    color: colors.primary,
    fontStyle: "italic",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 4,
  },
  sendButtonText: {
    color: "white",
    textAlign: "center",
  },
});

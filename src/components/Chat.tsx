import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/index";
import { GiftedChat } from "react-native-gifted-chat";
import { useNavigation } from "@react-navigation/native";

export default function ChatWindow({ user, closeChat }) {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        loadChatMessages();
    }, []);

    const loadChatMessages = () => {
        const chatMessages = [
            {
                _id: 1,
                text: "Hello!", //Auto message
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: "John Doe", //Ông chỉnh tên với id lại khúc này giúp tui 
                },
            },
            {
                _id: 2,
                text: "Hi there!",
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: user.username,
                },
            },
        ];
        setMessages(chatMessages);
    };

    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    const handleBackButtonPress = () => {
        closeChat();
        navigation.goBack();
    };

    return (
        <Modal isVisible={true} onBackdropPress={handleBackButtonPress}>
            <View style={chatStyle.container}>
                <Text style={chatStyle.header}>Chat with {user.username}</Text>
                <View style={chatStyle.chatContainer}>
                    <GiftedChat
                        messages={messages}
                        onSend={onSend}
                        user={{
                            _id: 1,
                        }}
                    />
                </View>
                <TouchableOpacity onPress={handleBackButtonPress} style={chatStyle.backButton}>
                    <Text style={chatStyle.backButtonText}>Close</Text>
                    {/*nút này tui đang để hơi ngu*/}
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const chatStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "110%",
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
    backButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

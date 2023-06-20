import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from "../styles/index";

const ChatWindow = ({ user, closeChat }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        console.log(`Sending message "${message}" to user ${user.id}`);
        setMessage("");
    };

    return (
        <Modal isVisible={true} onBackdropPress={closeChat}>
            <View style={styles.container}>
                <Text style={styles.header}>Chat with User #{user.id}</Text>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Type your message here..."
                />
                <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
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
        color: 'white',
        textAlign: 'center',
    },
});

export default ChatWindow;

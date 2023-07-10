import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles, { colors } from "../styles/index";

export default function NotificationScreen({ navigation }) {
    const [notifications, setNotifications] = useState([
        {
            id: "1",
            message: "Notification 1",
        },
        {
            id: "2",
            message: "Notification 2",
        },
        {
            id: "3",
            message: "Notification 3",
        },
        {
            id: "4",
            message: "Notification 4",
        },
    ]);

    const renderNotification = ({ item }) => (
        <TouchableOpacity style={Notistyles.notificationItem}>
            <TouchableOpacity
                style={Notistyles.deleteButton}
                onPress={() => deleteNotification(item.id)}
            >
                <MaterialCommunityIcons name="trash-can" size={24} color={colors.primary} />
            </TouchableOpacity>
            <Text style={Notistyles.notificationText}>{item.message}</Text>
        </TouchableOpacity>
    );

    const deleteNotification = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    };

    const handleSave = async () => {
        navigation.navigate("Main");
    };

    return (
        <View style={Notistyles.container}>
            <View style={Notistyles.header}>
                <Text style={styles.heading3}>Notifications</Text>
            </View>
            {notifications.length > 0 ? (
                <FlatList
                    data={notifications}
                    renderItem={renderNotification}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={Notistyles.notificationList}
                />
            ) : (
                <View style={Notistyles.content}>
                    <Text style={styles.heading5}>No new notifications</Text>
                </View>
            )}

            <TouchableOpacity style={Notistyles.button} onPress={handleSave}>
                <Text style={[styles.heading5, { color: "white" }]}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const Notistyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    content: {
        alignItems: "center",
    },
    notificationList: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    notificationItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    notificationText: {
        marginLeft: 10,
        fontSize: 16,
    },
    deleteButton: {
        marginRight: 10,
    },
    button: {
        backgroundColor: colors.primary,
        height: 44,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
});

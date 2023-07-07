import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles, { colors } from "../styles/index";

export default function NotificationScreen({ navigation }) {

    return (
        <View style={Notistyles.container}>
            <View style={Notistyles.header}>
                <Text style={styles.heading3}>Notifications</Text>
            </View>
            <View style={Notistyles.content}>
                <Text style={styles.heading5}>No new notifications</Text>
            </View>
        </View>
    );
}

const Notistyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: "10%",
        paddingHorizontal: "10%",
        alignSelf: "center",
        marginBottom: "20%",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
    },
    closeButton: {
        padding: 8,
    },
    content: {
        alignItems: "center",
    },
});

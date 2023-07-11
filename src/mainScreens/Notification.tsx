import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
    <TouchableOpacity style={NotiStyles.notificationItem}>
      <TouchableOpacity
        style={NotiStyles.deleteButton}
        onPress={() => deleteNotification(item.id)}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={24}
          color={colors.primary}
        />
      </TouchableOpacity>
      <Text style={NotiStyles.notificationText}>{item.message}</Text>
    </TouchableOpacity>
  );

  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleSave = async () => {
    navigation.navigate("Home");
  };

  return (
    <View style={NotiStyles.container}>
      <View>
        {notifications.length > 0 ? (
          <FlatList
            data={notifications}
            renderItem={renderNotification}
            keyExtractor={(item) => item.id}
            contentContainerStyle={NotiStyles.notificationList}
          />
        ) : (
          <View style={NotiStyles.content}>
            <Text style={styles.heading5}>No new notifications</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const NotiStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
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
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles, { colors } from "../styles/index";

dayjs.extend(relativeTime);

export default function NotificationScreen({ navigation }) {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      message: "You have a new match",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      id: "2",
      message: "A sent you a message",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      id: "3",
      message: "B sent you a message",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      id: "4",
      message: "You have a new coupon",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
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
      <Image
        source={{ uri: item.image }}
        style={NotiStyles.notificationImage}
      />
      <View>
        <View style={NotiStyles.row}>
          <Text style={NotiStyles.notificationTitle}>{`Noti ${item.id}`}</Text>
          <Text style={NotiStyles.subTitle}>
            {dayjs(item.time).fromNow(true)}
          </Text>
        </View>
        <Text style={NotiStyles.subTitle} numberOfLines={2}>
          {item.message}
        </Text>
      </View>
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
    height: 80,
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  notificationText: {
    marginLeft: 10,
    fontSize: 16,
  },
  deleteButton: {
    marginRight: 10,
  },
  subTitle: {
    color: "gray",
  },
  notificationTitle: {
    fontWeight: "bold",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 4,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import Swipeable from 'react-native-swipeable';
import relativeTime from "dayjs/plugin/relativeTime";
import styles, { colors } from "../styles/index";
dayjs.extend(relativeTime);
export default function NotificationScreen({ navigation }) {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      message: "You have a new match",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: "2",
      message: "A sent you a message",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: "3",
      message: "B sent you a message",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: "4",
      message: "You have a new coupon",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
  ]);

  const renderNotification = ({ item }) => {
    const deleteNotification = (id) => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    };

    const renderRightActions = (_, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: "clamp",
      });

      return (
        <TouchableOpacity
          style={[NotiStyles.rightAction, { backgroundColor: colors.primary }]}
          onPress={() => deleteNotification(item.id)}
        >
          <Animated.Text style={[styles.bodyText2, { transform: [{ scale }] }]}>
            Delete
          </Animated.Text>
        </TouchableOpacity>
      );
    };


    const rightButtons = [
      <TouchableOpacity
        style={[NotiStyles.deleteButton, { backgroundColor: colors.primary }]}
        onPress={() => deleteNotification(item.id)}
      >
      </TouchableOpacity>,
    ];

    return (
      <Swipeable rightButtons={rightButtons} onRightButtonsOpenRelease={() => deleteNotification(item.id)}>
        <TouchableOpacity style={NotiStyles.notificationItem}>
        </TouchableOpacity>
        <Image source={{ uri: item.image }} style={NotiStyles.notificationImage} />
        <View style={NotiStyles.row}>
          <Text style={NotiStyles.notificationTitle}>{`Noti ${item.id}`}</Text>
          <Text style={NotiStyles.subTitle}>
            {dayjs(item.time).fromNow(true)}
          </Text></View>
        <Text style={NotiStyles.subTitle} numberOfLines={2}>{item.message}</Text>
      </Swipeable>
    );
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
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
  },
  notificationList: {
    flexGrow: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 40,
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
    color: "gray"
  },
  notificationTitle: {
    fontWeight: "bold",
    flex: 1,

  },
  row: {
    flexDirection: "row",
  },
  rightAction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});

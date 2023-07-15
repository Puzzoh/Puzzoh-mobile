import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchOtherUser = async () => {
      const currUser = await Auth.currentAuthenticatedUser();

      const userItem = chat.chatRoom.users.items.find(
        (item) => item.user.id != currUser.attributes.sub
      );
      setUser(userItem?.user);
    };

    fetchOtherUser();
  }, []);

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Chat", {
          chatroomID: chat.chatRoom.id,
          name: user?.username,
        })
      }
      style={styles.container}
    >
      <Image source={{ uri: user?.imageURL }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {user?.username}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage?.createdAt).fromNow(true)}
          </Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage?.Text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 80,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;

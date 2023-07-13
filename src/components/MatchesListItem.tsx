import React, { useContext } from "react";
import { Text, Image, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { createChatRoom, createUserChatRoom } from "../graphql/mutations";
import { gql, useMutation } from "@apollo/client";
import { getCommonChatRoomWithUser } from "../services/chatRoomService";
import UserContext from "../context/UserContext";

dayjs.extend(relativeTime);

const MatchesListItem = ({ user }) => {
  const navigation = useNavigation();

  const currUser = useContext(UserContext);

  const CREATE_CHATROOM = gql(createChatRoom);
  const CREATE_USER_CHATROOM = gql(createUserChatRoom);
  const [createChatRoomMutation] = useMutation(CREATE_CHATROOM);
  const [createUserChatRoomMutation] = useMutation(CREATE_USER_CHATROOM);

  const onPress = async () => {
    const existingChatRoom = await getCommonChatRoomWithUser(user.id);

    if (existingChatRoom) {
      navigation.navigate("Chat", { id: existingChatRoom.id });
      return;
    }

    const newChatRoomData = await createChatRoomMutation({
      variables: {
        input: {},
      },
    });
    if (!newChatRoomData.data?.createChatRoom) {
      console.log("Room already exists");
    }
    const newChatRoom = newChatRoomData.data?.createChatRoom;
    // console.log(newChatRoom);
    // console.log(user.id);
    // console.log(currUser.id);
    await createUserChatRoomMutation({
      variables: {
        input: {
          chatRoomId: newChatRoom.id,
          userId: user.id,
        },
      },
    });
    const userChat = await createUserChatRoomMutation({
      variables: {
        input: {
          chatRoomId: newChatRoom.id,
          userId: currUser.id,
        },
      },
    });
    console.log(userChat);
    navigation.navigate("Chat", { id: newChatRoom.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: user?.imageURL }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {user?.username}
        </Text>

        <Text numberOfLines={2} style={styles.subTitle}>
          {user?.bio}
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
    height: 70,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default MatchesListItem;

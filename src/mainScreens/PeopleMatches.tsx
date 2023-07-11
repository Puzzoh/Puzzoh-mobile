import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Chat from "../mainScreens/Chat";
import { gql, useQuery, useMutation } from "@apollo/client";
import { listUsers } from "../graphql/queries";
import ChatListItem from "../components/ChatListItem";

const GET_PEOPLE_MATCHES = gql(listUsers);

const PeopleMatches = () => {
  const { data } = useQuery(GET_PEOPLE_MATCHES);
  const people = data?.listUsers.items;

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserPress = (user) => {
    setSelectedUser(user);
  };

  const handleClosePopup = () => {
    setSelectedUser(null);
  };

  const chat = [
    {
      id: "1",
      user: {
        id: "u7",
        name: "A",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      },
      lastMessage: {
        id: "m6",
        text: "I think I have a solution for tha.",
        createdAt: Date.now(),
      },
    },
    {
      id: "2",
      user: {
        id: "u8",
        name: "B",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      },
      lastMessage: {
        id: "m7",
        text: "How are you doing?",
        createdAt: Date.now(),
      },
    },
    {
      id: "3",
      user: {
        id: "u9",
        name: "C",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      },
      lastMessage: {
        id: "m8",
        text: "Dear, what did you eat, today?",
        createdAt: "2023-05-27T15:40:00.000Z",
      },
    },
    {
      id: "4",
      user: {
        id: "u9",
        name: "D",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      },
      lastMessage: {
        id: "m8",
        text: "What about our podcast?",
        createdAt: "2022-09-27T15:40:00.000Z",
      },
    },
    {
      id: "5",
      user: {
        id: "u9",
        name: "E",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      },
      lastMessage: {
        id: "m8",
        text: "Do I have to send you any more details?",
        createdAt: "2021-09-27T15:40:00.000Z",
      },
    },
  ];

  return (
    <SafeAreaView style={nStyles.root}>
      <View style={nStyles.container}>
        <FlatList
          data={chat}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ChatListItem chat={item} key={index} />
          )}
        />
      </View>
      {selectedUser && (
        <Chat user={selectedUser} closeChat={handleClosePopup} />
      )}
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");

const nStyles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 5,
    marginTop: 20,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: height / 4,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
});

export default PeopleMatches;

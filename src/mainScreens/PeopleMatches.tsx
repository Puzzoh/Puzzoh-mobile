import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import styles, { colors } from "../styles/index";
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";
import MatchesList from "../components/MatchesList";
import ChatListItem from "../components/ChatListItem";
import UserContext from "../context/UserContext";
import { onCreateMessage } from "../graphql/subscriptions";

const PeopleMatches = () => {
  const currUser = useContext(UserContext);

  const [chatRooms, setChatrooms] = useState([]);

  const { data, refetch } = useQuery(gql(listChatRooms), {
    variables: {
      id: currUser?.id,
    },
  });

  const { data: newMessageData } = useSubscription(gql(onCreateMessage), {
    variables: {
      filter: {},
    },
  });

  const chatRoomsData = data?.getUser?.ChatRooms?.items;

  useEffect(() => {
    const sortChatRooms = async (rooms) => {
      return [...rooms].sort(
        (r1, r2) =>
          new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt)
      );
    };

    const loadSortedChatRooms = async () => {
      const sortedChatRoomsData = await sortChatRooms(chatRoomsData);
      setChatrooms(sortedChatRoomsData);
    };

    if (data) {
      loadSortedChatRooms();
    }
  }, [data, chatRoomsData]);

  useEffect(() => {
    if (newMessageData) {
      refetch();
    }
  }, [newMessageData]);

  return (
    <SafeAreaView style={nStyles.root}>
      <View style={nStyles.container}>
        <MatchesList />
        <Text style={[styles.heading3]}>Your Chat Rooms</Text>
        <FlatList
          data={chatRooms}
          renderItem={({ item, index }) => (
            <ChatListItem chat={item} key={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            updatedAt
            users {
              items {
                user {
                  id
                  username
                  imageURL
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;

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

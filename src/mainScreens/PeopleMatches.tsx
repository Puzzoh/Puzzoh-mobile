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
import { gql, useQuery, useMutation } from "@apollo/client";
import MatchesList from "../components/MatchesList";
import ChatListItem from "../components/ChatListItem";
import UserContext from "../context/UserContext";

const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
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
              Text
            }
          }
        }
      }
    }
  }
`;

const PeopleMatches = () => {
  const currUser = useContext(UserContext);

  const LIST_CHAT_ROOMS = gql(listChatRooms);
  const { data } = useQuery(LIST_CHAT_ROOMS, {
    variables: {
      id: currUser.id,
    },
  });

  const chatRooms = data?.getUser?.ChatRooms?.items;

  return (
    <SafeAreaView style={nStyles.root}>
      <View style={nStyles.container}>
        <MatchesList />
        <Text style={[styles.heading3]}>Your Chat Rooms</Text>
        <FlatList
          data={chatRooms}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <ChatListItem chat={item} key={index} />
          )}
        />
      </View>
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

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
import { colors } from "../styles/index";
import ChatWindow from "../components/ChatWindowPopup";

import { gql, useQuery, useMutation } from "@apollo/client";
import { listUsers } from "../graphql/queries";

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

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>People Matches</Text>
        <FlatList
          data={people}
          keyExtractor={(item) => item?.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleUserPress(item)}>
              <View style={styles.user}>
                <View style={styles.textContainer}>
                  {index < 3 && (
                    <Text style={styles.recommended}>
                      Looking for: {item?.purpose[0]}, {item?.purpose[1]}
                    </Text>
                  )}
                  <Text style={styles.name}>{item?.username}</Text>
                  <Text style={styles.bio}>{item?.bio}</Text>
                </View>
                <Image style={styles.image} source={{ uri: item?.imageURL }} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      {selectedUser && (
        <ChatWindow user={selectedUser} closeChat={handleClosePopup} />
      )}
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 5,
    marginTop: 20, // Added margin at the top of the container
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.primary,
    marginBottom: 10,
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
  recommended: {
    fontSize: 12,
    color: colors.primary,
    marginBottom: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 3,
  },
});

export default PeopleMatches;

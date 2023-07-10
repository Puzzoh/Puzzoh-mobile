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
import styles, { colors } from "../styles/index";
import Chat from "../components/Chat"
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
    <SafeAreaView style={nStyles.root}>
      <View style={nStyles.container}>
        <FlatList
          data={people}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => handleUserPress(item)} key={index}>
              <View style={nStyles.user}>
                <View style={nStyles.textContainer}>
                  <Text style={[styles.bodyText3, { color: colors.primary }]}>
                    Purpose: {item.purpose}
                  </Text>
                  <Text style={styles.heading4}>{item.username}</Text>
                  <Text
                    style={[
                      styles.bodyText2,
                      { marginBottom: 3, color: "gray" },
                    ]}
                  >
                    {item.bio}
                  </Text>
                </View>
                <Image style={nStyles.image} source={{ uri: item.imageURL }} />
              </View>
            </TouchableOpacity>
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

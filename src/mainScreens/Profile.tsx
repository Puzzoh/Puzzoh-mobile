import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Auth } from "aws-amplify";
import * as ImagePicker from "expo-image-picker";
import { gql, useQuery } from "@apollo/client";
import { getUser } from "../graphql/queries";

const GET_USER_INFO = gql(getUser);

const Profile = ({ navigation }) => {
  const [userID, setUserID] = useState(null);

  const { data } = useQuery(GET_USER_INFO, {
    variables: {
      id: userID,
      skip: !userID,
    },
  });

  const user = data?.getUser;

  useEffect(() => {
    const getUserID = async () => {
      try {
        const currUser = await Auth.currentAuthenticatedUser();
        setUserID(currUser.attributes.sub);
      } catch (error) {
        console.error(error);
      }
    };

    getUserID();
  }, []);

  const signOut = () => {
    Auth.signOut();
  };

  const [avatar, setAvatar] = useState(null);

  const handleSettings = () => {
    navigation.navigate("Settings");
  };

  const handleEditInfo = () => {
    navigation.navigate("EditInfo");
  };

  const handleEditPicture = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the camera roll is required!");
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imageResult.canceled) {
      setAvatar(imageResult.uri);
    }
  };

  return (
    <View style={nStyles.container}>
      <View style={nStyles.header}>
        <TouchableOpacity
          style={nStyles.iconContainer}
          onPress={handleSettings}
        >
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={nStyles.iconContainer} onPress={signOut}>
          <Ionicons name="log-out-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={nStyles.profileContainer}>
        <TouchableOpacity style={nStyles.avatarContainer}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={nStyles.avatarImage} />
          ) : (
            <Ionicons name="person-circle-outline" size={120} color="#ccc" />
          )}
          <TouchableOpacity
            style={nStyles.editIconContainer}
            onPress={handleEditPicture}
          >
            <Ionicons name="pencil-outline" size={24} color="#333" />
          </TouchableOpacity>
        </TouchableOpacity>
        <Text style={nStyles.username}>{user?.username}</Text>
        <Text style={nStyles.infoText}>{user?.email} </Text>
        <TouchableOpacity style={nStyles.button} onPress={handleEditInfo}>
          <Text style={nStyles.buttonText}>Edit Profile Info</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 16,
  },
  iconContainer: {
    marginLeft: 16,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  avatarContainer: {
    position: "relative",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;

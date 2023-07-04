import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Auth, Storage } from "aws-amplify";
import * as ImagePicker from "expo-image-picker";
import { gql, useQuery, useMutation } from "@apollo/client";
import { getUser } from "../graphql/queries";
import { updateUser } from "../graphql/mutations";

const GET_USER_INFO = gql(getUser);

const Profile = ({ navigation }) => {
  const UPDATE_USER = gql(updateUser);
  const [updateUserMutation] = useMutation(UPDATE_USER);

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

  const handleSettings = () => {
    navigation.navigate("Settings");
  };

  const handleEditInfo = () => {
    navigation.navigate("EditInfo", { user });
  };

  const handleEditFilter = () => {
    navigation.navigate("EditFilter", { user });
  };

  const fetchImageUri = async (uri) => {
    const res = await fetch(uri);
    const blob = await res.blob();
    return blob;
  };

  const handleEditPicture = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access the camera roll is required!");
      return;
    }

    // let buf = Buffer.from(image.toString().replace(/^data:image\/\w+;base64,/, ""), "base64");

    const imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imageResult.canceled) {
      const { uri } = imageResult.assets[0];

      const img = await fetchImageUri(uri);

      const fileName = `user_${userID}_${Date.now()}.jpg`;

      try {
        await Storage.put(fileName, img, {
          level: "public",
          // contentEncoding: "base64",
          contentType: "image/jpeg",
          progressCallback: (uploadProgress) =>
            console.log(
              "PROGRESS__",
              uploadProgress,
              "/",
              uploadProgress.total
            ),
        });

        const s3ImageURL = await Storage.get(fileName);

        const { data } = await updateUserMutation({
          variables: {
            input: {
              id: userID,
              imageURL: s3ImageURL,
            },
          },
        });

        console.log("Image uploaded successfully:", data.updateUser.imageURL);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
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
          {user?.imageURL ? (
            <Image
              source={{ uri: user?.imageURL }}
              style={nStyles.avatarImage}
            />
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

        <TouchableOpacity style={nStyles.button} onPress={handleEditFilter}>
          <Text style={nStyles.buttonText}>Edit Matching Filter</Text>
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

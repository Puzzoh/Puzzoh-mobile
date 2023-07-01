import { Auth } from "aws-amplify";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useMutation, gql } from "@apollo/client";
import { createUser } from "../graphql/mutations";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  const checkFirstLogin = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      const isFirstLogin = attributes["custom:isFirstLogin"];

      if (isFirstLogin === "true") {
        await createUserInfo();
        await Auth.updateUserAttributes(user, {
          "custom:isFirstLogin": "false",
        });
        navigation.navigate("Gender");
      }
    } catch (error) {
      console.error("Error checking first-time login:", error);
    }
  };

  const CREATE_USER = gql(createUser);
  const [createUserMutation] = useMutation(CREATE_USER);

  const createUserInfo = async () => {
    try {
      const currUser = await Auth.currentAuthenticatedUser();
      const { username } = currUser;
      const email = currUser.attributes.email;
      const id = currUser.attributes.sub;

      const { data } = await createUserMutation({
        variables: {
          input: {
            id,
            username,
            email,
          },
        },
      });

      console.log("User created:", data.createUser);
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      await checkFirstLogin();
    };

    initializeUser();

    const unsubscribe = navigation.addListener("focus", () => {
      navigation.navigate("Main");
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000000" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoadingScreen;
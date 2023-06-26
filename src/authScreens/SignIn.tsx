import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import styles, { colors } from "../styles/index";
import FontAwesome from "@expo/vector-icons/Ionicons";
// import { validateEmail, validatePassword } from "../utils/validation";
import { Auth } from "aws-amplify";
import { useMutation, gql } from "@apollo/client";
import { createUser } from "../graphql/mutations";

const Logo = require("../../assets/imgs/logo1.png").default;

const windowWidth = Dimensions.get("window").width;

export default function SignIn({ navigation }) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const CREATE_USER = gql(createUser);
  const [createUserMutation] = useMutation(CREATE_USER);

  const isFirstLogin = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;

      if (attributes["cognito:username"]) {
        // Set a flag or attribute to indicate first-time login
        const isFirstLogin = attributes["isFirstLogin"] === "true";
        return isFirstLogin;
      }

      return false; // User is not logging in for the first time
    } catch (error) {
      console.error("Error checking first-time login:", error);
      return false;
    }
  };

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

  const onSignInPressed = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await Auth.signIn({
        username: state.username,
        password: state.password,
      });

      const userIsFirstLogin = await isFirstLogin();
      if (userIsFirstLogin) {
        console.log("User is first login");
        createUserInfo();
      }
    } catch (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={nStyles.container}>
        <Text style={styles.heading1}>Stop Swiping</Text>
        <Text style={styles.heading1}>Start Meeting</Text>
        <View style={{ marginVertical: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={state.username}
            onChangeText={(text) => setState({ ...state, username: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={state.password}
            onChangeText={(text) => setState({ ...state, password: text })}
            secureTextEntry
          />
          <View style={{ marginVertical: 20 }}>
            <TouchableOpacity
              style={styles.spanButton}
              onPress={onSignInPressed}
            >
              {loading ? (
                <Text style={styles.chosenText}>Loading ...</Text>
              ) : (
                <Text style={styles.chosenText}>Login</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 50 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.bodyText}>New to Puzzoh?</Text>
            <TouchableOpacity onPress={onSignUpPress}>
              <Text style={styles.highlightText}> Sign Up</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onForgotPasswordPressed}>
            <Text style={styles.highlightText}> Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bgText}>or continue with</Text>
        <View style={nStyles.socialLogin}>
          <FontAwesome
            name="ios-logo-facebook"
            size={48}
            color={colors.primary}
          />
          <FontAwesome
            name="ios-logo-apple"
            size={48}
            color={colors.primary}
            style={{ marginHorizontal: 20 }}
          />
          <FontAwesome
            name="ios-logo-google"
            size={48}
            color={colors.primary}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const nStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    width: windowWidth,
    marginTop: 100,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 50,
  },
});

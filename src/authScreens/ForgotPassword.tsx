import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "../styles/index";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  const onSendPressed = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate("ChangePassword");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <Text style={styles.heading1}>Forgot My Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <TouchableOpacity onPress={onSendPressed} style={styles.spanButton}>
          <Text style={styles.chosenText}>Send Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSignInPress}>
          <Text style={[styles.highlightText, { marginVertical: 10 }]}>
            Back to sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
});

export default ForgotPasswordScreen;

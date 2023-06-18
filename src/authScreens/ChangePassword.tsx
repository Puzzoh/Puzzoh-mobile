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
import styles from "../styles/index";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      Alert.alert("Your password has been reset!");
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={nStyles.container}>
      <Text style={styles.heading1}>Change Password</Text>
      <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter the code"
          value={code}
          onChangeText={setCode}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity onPress={onSubmit} style={styles.spanButton}>
          <Text style={styles.chosenText}>Send</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.highlightText}>Back to sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});

export default ForgotPasswordScreen;

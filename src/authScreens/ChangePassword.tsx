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
import { useNavigation, NavigationProp } from "@react-navigation/core";
import styles from "../styles/index";
import { Auth } from "aws-amplify";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  type RootStackParamList = {
    ConfirmSignUp: { username: string };
    SignIn: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <Text style={styles.heading1}>Change Password</Text>
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

        <TouchableOpacity onPress={onSubmit} style={styles.spanButton}>
          <Text style={styles.chosenText}>Send</Text>
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

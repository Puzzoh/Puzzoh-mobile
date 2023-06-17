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

  type RootStackParamList = {
    ChangePassword: undefined;
    SignIn: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
    <View style={screenStyles.container}>
      <Text style={styles.heading1}>Forgot Password</Text>
      <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity onPress={onSendPressed} style={styles.spanButton}>
          <Text style={styles.chosenText}>Send Code</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.highlightText}>Back to sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
});

export default ForgotPasswordScreen;

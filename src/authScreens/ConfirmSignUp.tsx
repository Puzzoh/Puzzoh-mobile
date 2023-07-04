import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import styles from "../styles/index";
import { Auth } from "aws-amplify";

const ConfirmSignUp = ({ navigation, route }) => {
  const [code, setCode] = useState("");

  const registeredName = route?.params?.username;

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(registeredName, code);
      Alert.alert("Successful confirmation");
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(registeredName);
      Alert.alert("Code has been resent to your email");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={nStyles.container}>
      <Text style={styles.heading3}> Hi {registeredName},</Text>
      <Text style={styles.heading3}>please confirm the code</Text>
      <Text style={styles.heading3}>sent to your email. </Text>
      <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your confirmation code"
          value={code}
          onChangeText={setCode}
        />
      </View>

      <TouchableOpacity onPress={onConfirmPressed} style={styles.spanButton}>
        <Text style={styles.chosenText}>Confirm</Text>
      </TouchableOpacity>

      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={onResendPress}
          style={[styles.spanButton, { backgroundColor: "#FFF" }]}
        >
          <Text style={[styles.chosenText, { color: "#000" }]}>
            Resend Code
          </Text>
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

export default ConfirmSignUp;

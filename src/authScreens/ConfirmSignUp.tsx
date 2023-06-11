import {
  useNavigation,
  useRoute,
  NavigationProp,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import styles from "../styles/index";
import { Auth } from "aws-amplify";

export default function ConfirmSignUp() {
  const [code, setCode] = useState("");

  const route = useRoute();

  type RootStackParamList = {
    SignIn: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onConfirmPressed = async () => {
    try {
      await Auth.confirmSignUp(route?.params?.username, code);
      Alert.alert("Successful confirmation");
      navigation.navigate("Intro");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(route?.params?.username);
      Alert.alert("Code has been resent to your email");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container}>
        <Text style={styles.heading1}>Confirm your email</Text>
        <Text style={[styles.heading3, { marginVertical: 10 }]}>
          {" "}
          Hi {route?.params?.username}, please confirm the code sent to your
          email.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your confirmation code"
          value={code}
          onChangeText={setCode}
        />

        <TouchableOpacity onPress={onConfirmPressed} style={styles.spanButton}>
          <Text style={styles.chosenText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onResendPress}
          style={[styles.spanButton, { backgroundColor: "#FFF" }]}
        >
          <Text style={[styles.chosenText, { color: "#000" }]}>
            Resend Code
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSignInPress}>
          <Text style={[styles.highlightText, { marginVertical: 10 }]}>
            Back to sign in
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
});

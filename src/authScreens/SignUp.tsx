import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import styles, { colors } from "../styles/index";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import FontAwesome from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

export default function SignUp() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });

  const navigation = useNavigation();

  const onSignUpPressed = async () => {
    try {
      await Auth.signUp({
        username: state.username,
        password: state.password,
        attributes: {
          email: state.email,
          name: state.username,
        },
      });

      navigation.navigate("ConfirmSignUp", { username: state.username });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container1}>
        <Text style={styles.heading1}>Sign Up</Text>
        <Text style={[styles.heading3, { marginVertical: 10 }]}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="John"
          value={state.username}
          onChangeText={(text) => setState({ ...state, username: text })}
        />
        <Text style={[styles.heading3, { marginVertical: 10 }]}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          value={state.email}
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <Text style={[styles.heading3, { marginVertical: 10 }]}>
          Create a password
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setState({ ...state, password: text })}
            secureTextEntry={true}
            value={state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            onChangeText={(text) =>
              setState({ ...state, confirmedPassword: text })
            }
            secureTextEntry={true}
            value={state.confirmedPassword}
          />
        </View>
        <TouchableOpacity style={styles.spanButton} onPress={onSignUpPressed}>
          <Text style={styles.chosenText}>Register</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <Text style={styles.bodyText}>Already have an account?</Text>
          <TouchableOpacity onPress={onSignInPress}>
            <Text style={styles.highlightText}> Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bgText}>or continue with</Text>
        <View style={screenStyles.socialLogin}>
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

const screenStyles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
    padding: 20,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 50,
  },
});

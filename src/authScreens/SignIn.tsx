import React, { useState } from "react";
import {
  Text,
  View,
  Button,
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
import { validateEmail, validatePassword } from "../utils/validation";
import { Auth } from "aws-amplify";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/Ionicons";

const Logo = require("../../assets/imgs/logo1.png").default;

const windowWidth = Dimensions.get("window").width;

export default function SignIn() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const { height } = useWindowDimensions();
  type RootStackParamList = {
    ForgotPassword: undefined;
    SignUp: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onSignInPressed = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await Auth.signIn({
        username: state.username,
        password: state.password,
      });
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
      <View style={screenStyles.container}>
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

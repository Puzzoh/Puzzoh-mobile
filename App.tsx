import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ActivityIndicatorComponent,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import * as Font from "expo-font";
import { Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/authScreens/SignIn";
import SignUp from "./src/authScreens/SignUp";
import ConfirmSignUp from "./src/authScreens/ConfirmSignUp";
import ChangePassword from "./src/authScreens/ChangePassword";
import ForgotPassword from "./src/authScreens/ForgotPassword";
import Gender from "./src/infoScreens/Gender";
import Pronounce from "./src/infoScreens/Pronounce";
import Purpose from "./src/infoScreens/Purpose";
import Interest from "./src/infoScreens/Interest";
import FoodPref from "./src/infoScreens/FoodPref";
import MainScreen from "./src/mainScreens/NavigationScreen";
import OnboardingSlider from "./src/components/OnboardingSlider";

Amplify.configure(awsconfig);

const Stack = createNativeStackNavigator();

const App = () => {
  const [mainScreens, showMainScreens] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [user, setUser] = useState(undefined);

  const fetchFonts = () => {
    return Font.loadAsync({
      Lexend: require("./assets/fonts/LexendDeca.ttf"),
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      Poppins_bold: require("./assets/fonts/Poppins-Bold.ttf"),
    });
  };

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    getFonts();
  }, []);

  // if (!fontLoaded) {
  //   return null;
  // }

  const authenticateUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        authenticateUser();
      }
    };
    Hub.listen("auth", listener);
    return () => {
      Hub.remove("auth", listener);
    };
  }, []);

  if (!mainScreens) {
    return <OnboardingSlider onDone={() => showMainScreens(true)} />;
  }

  if (user === undefined) {
    return (
      <View style={appStyles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={appStyles.root}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="Main" component={MainScreen} />
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="Gender" component={Gender} />
              <Stack.Screen name="Pronounce" component={Pronounce} />
              <Stack.Screen name="Purpose" component={Purpose} />
              <Stack.Screen name="Interest" component={Interest} />
              <Stack.Screen name="FoodPref" component={FoodPref} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

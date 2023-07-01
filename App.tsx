import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import * as Font from "expo-font";
import RootProvider from "./RootProvider";
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
import NavigationScreen from "./src/mainScreens/NavigationScreen";
import OnboardingSlider from "./src/components/OnboardingSlider";
import Settings from "./src/mainScreens/Settings";
import EditInfo from "./src/mainScreens/EditInfo";
import Initializer from "./src/mainScreens/Initializer";
import EditFilter from "./src/mainScreens/EditFilter";

Amplify.configure(awsconfig);
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);
  const [mainScreens, showMainScreens] = useState(false);
  // const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      Lexend: require("./assets/fonts/LexendDeca.ttf"),
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_Semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
      Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"),
    });
  };

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      // setFontLoaded(true);
    }
    getFonts();
  }, []);

  // if (!fontLoaded) {
  //   return (
  //     <View style={appStyles.loading}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }

  const authenticateUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(user);
    } catch (err) {
      setUser(null);
      console.log("Error fetching tokens:", err);
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
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <>
          <Stack.Screen name="Initializer" component={Initializer} />
          <Stack.Screen name="Gender" component={Gender} />
          <Stack.Screen name="Pronounce" component={Pronounce} />
          <Stack.Screen name="Purpose" component={Purpose} />
          <Stack.Screen name="Interest" component={Interest} />
          <Stack.Screen name="FoodPref" component={FoodPref} />
          <Stack.Screen name="Main" component={NavigationScreen} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="EditInfo" component={EditInfo} />
          <Stack.Screen name="EditFilter" component={EditFilter} />
        </>
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <RootProvider>
      <SafeAreaView style={appStyles.app}>
        <Navigation />
      </SafeAreaView>
    </RootProvider>
  );
};

const appStyles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

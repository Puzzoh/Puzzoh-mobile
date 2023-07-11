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
import AgeBioLocation from "./src/infoScreens/AgeBioLocation";
import MainNavigation from "./src/navigation/MainNavigation";
import Settings from "./src/mainScreens/Settings";
import Chat from "./src/mainScreens/Chat";
import EditInfo from "./src/mainScreens/EditInfo";
import Initializer from "./src/mainScreens/Initializer";
import Notification from "./src/mainScreens/Notification";
import Filter from "./src/mainScreens/Filter";
import Header from "./src/components/CustomHeaderBar";
import { UserProvider } from "./src/context/UserContext";
import { Entypo, Ionicons } from "@expo/vector-icons";

Amplify.configure(awsconfig);
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);
  const [userID, setUserID] = useState(undefined);

  // const [mainScreens, showMainScreens] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      Lexend: require("./assets/fonts/LexendDeca.ttf"),
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
      Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"),
    });
  };

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    getFonts();
  }, []);

  const authenticateUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(user);
      setUserID(user.attributes.sub);
    } catch (err) {
      setUser(null);
      setUserID(null);
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

  if (user === undefined) {
    return (
      <View style={appStyles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!fontLoaded) {
    return (
      <View style={appStyles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <UserProvider userID={userID}>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      >
        {user ? (
          <>
            <Stack.Screen
              name="Initializer"
              component={Initializer}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Gender"
              component={Gender}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Pronounce"
              component={Pronounce}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Purpose"
              component={Purpose}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Interest"
              component={Interest}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="FoodPref"
              component={FoodPref}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AgeBioLocation"
              component={AgeBioLocation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={MainNavigation}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditInfo"
              component={EditInfo}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Header" component={Header} />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={({ navigation }) => ({
                tabBarIcon: ({ color, size }) => (
                  <Ionicons
                    name="ios-chatbubbles-sharp"
                    size={size}
                    color={color}
                  />
                ),
                headerRight: () => (
                  <Entypo
                    onPress={() => navigation.navigate("Contacts")}
                    name="new-message"
                    size={18}
                    color={"royalblue"}
                    style={{ marginRight: 15 }}
                  />
                ),
              })}
            />
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
    </UserProvider>
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

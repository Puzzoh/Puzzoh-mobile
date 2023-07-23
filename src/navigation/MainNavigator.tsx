import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, Hub } from "aws-amplify";
import * as Font from "expo-font";
import HomeNavigator from "./HomeNavigator"; // Cannot file module error
import SignIn from "../authScreens/SignIn";
import SignUp from "../authScreens/SignUp";
import ConfirmSignUp from "../authScreens/ConfirmSignUp";
import ChangePassword from "../authScreens/ChangePassword";
import ForgotPassword from "../authScreens/ForgotPassword";
import Gender from "../infoScreens/Gender";
import Pronounce from "../infoScreens/Pronounce";
import Purpose from "../infoScreens/Purpose";
import Interest from "../infoScreens/Interest";
import FoodPref from "../infoScreens/FoodPref";
import AgeBioLocation from "../infoScreens/AgeBioLocation";
import Settings from "../mainScreens/Settings";
import Chat from "../mainScreens/Chat";
import Review from "../mainScreens/Review";
import EditInfo from "../mainScreens/EditInfo";
import Initializer from "../mainScreens/Initializer";
import Notification from "../mainScreens/Notification";
import Filter from "../mainScreens/Filter";
import Header from "../components/CustomHeaderBar";
import { UserProvider } from "../context/UserContext";
import { Entypo, Ionicons } from "@expo/vector-icons";
import VoucherDetailPopup from "../components/VoucherDetailPopup";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [user, setUser] = useState(undefined);
  const [userID, setUserID] = useState(undefined);
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      Lexend: require("../../assets/fonts/LexendDeca.ttf"),
      Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
      Poppins_SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
      Poppins_Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
      Poppins_Italic: require("../../assets/fonts/Poppins-Italic.ttf"),
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
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!fontLoaded) {
    return (
      <View style={styles.loading}>
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
              name="Voucher"
              component={VoucherDetailPopup}
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
              name="Review"
              component={Review}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Header" component={Header} />
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
            <Stack.Screen
              name="Notification"
              component={Notification}
              // options={{
              //   headerRight: () => (
              //     <Entypo
              //       name="new-message"
              //       size={18}
              //       color={"royalblue"}
              //       style={{ marginRight: 15 }}
              //     />
              //   ),
              // }}
            />
            <Stack.Screen name="Filter" component={Filter} />
            <Stack.Screen name="Chat" component={Chat} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ConfirmSignUp"
              component={ConfirmSignUp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainNavigator;

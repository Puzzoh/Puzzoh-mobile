import React from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../styles/index";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import Voucher from "./Home";
import Matches from "./Matches";
import Profile from "./Profile";
import { Auth } from "aws-amplify";
import { useMutation, gql } from "@apollo/client";
import { createUser } from "../graphql/mutations";

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  // const CREATE_USER = gql(createUser);
  // const [createUserMutation] = useMutation(CREATE_USER);

  // const isFirstLogin = async () => {
  //   try {
  //     const user = await Auth.currentAuthenticatedUser();
  //     const { attributes } = user;

  //     if (attributes["cognito:username"]) {
  //       // Set a flag or attribute to indicate first-time login
  //       const isFirstLogin = attributes["isFirstLogin"] === "true";
  //       return isFirstLogin;
  //     }

  //     return false; // User is not logging in for the first time
  //   } catch (error) {
  //     console.error("Error checking first-time login:", error);
  //     return false;
  //   }
  // };

  // const createUserInfo = async () => {
  //   try {
  //     const currUser = await Auth.currentAuthenticatedUser();
  //     const { username } = currUser;
  //     const email = currUser.attributes.email;
  //     const id = currUser.attributes.sub;

  //     const { data } = await createUserMutation({
  //       variables: {
  //         input: {
  //           id,
  //           username,
  //           email,
  //         },
  //       },
  //     });

  //     console.log("User created:", data.createUser);
  //   } catch (error) {
  //     console.log("Error creating user:", error);
  //   }
  // };

  // if (isFirstLogin) {
  //   console.log("User is first login");
  //   //   createUserInfo();
  // } else {
  //   console.log("Not first login");
  // }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen
          name={"Discover"}
          component={Voucher}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="globe-americas"
                  size={20}
                  color={focused ? colors.primary : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Matches"}
          component={Matches}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <Ionicons
                  name="chatbubbles"
                  size={20}
                  color={focused ? colors.primary : "gray"}
                ></Ionicons>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Profile"}
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? colors.primary : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth(),
          height: 2,
          backgroundColor: colors.primary,
          position: "absolute",
          bottom: 50,
          left: 0,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width;
  return width / 3;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

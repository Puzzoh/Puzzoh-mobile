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

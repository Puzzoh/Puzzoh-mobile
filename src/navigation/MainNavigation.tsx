import React from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../styles/index";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useRef } from "react";
import Discover from "../mainScreens/Discover";
import Matches from "../mainScreens/Matches";
import Profile from "../mainScreens/Profile";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
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
          component={Discover}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="globe-americas"
                size={15}
                color={focused ? colors.primary : "gray"}
              />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />

        <Tab.Screen
          name={"Matches"}
          component={Matches}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
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
};

function getWidth() {
  let width = Dimensions.get("window").width;
  return width / 3;
}

export default MainNavigation;

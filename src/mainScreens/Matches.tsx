import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import PeopleMatches from "./PeopleMatches";
import VoucherMatches from "./VoucherMatches";
import { colors } from "../styles/index";

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="PeopleMatches"
        component={PeopleMatches}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="VoucherMatches"
        component={VoucherMatches}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="ticket-alt" size={20} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;

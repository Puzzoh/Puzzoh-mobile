import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Constant from "expo-constants";
import styles, { colors } from "../styles/index";

export default function Header() {
  return (
    <View
      style={{
        // marginTop:Constant.statusBarHeight,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 5,
        }}
      >
        <TouchableOpacity style={styles.blankButton}>
          <Ionicons name="notifications" size={32} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "column",
          margin: 5,
          marginLeft: 60,
          marginRight: 10,
        }}
      >
        <Text style={styles.heading2}>Discover</Text>
        <Text style={styles.bgText}>New York, NY</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: 150,
          margin: 5,
        }}
      >
        <TouchableOpacity style={styles.blankButton}>
          <Ionicons
            name="filter"
            size={32}
            color={colors.primary}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

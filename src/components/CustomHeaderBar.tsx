import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import Constant from "expo-constants";
import styles, { colors } from "../styles/index";

export default function Header() {
  const [isFilterActive, setFilterActive] = useState(false);

  const toggleFilter = () => {
    setFilterActive(!isFilterActive);
  };

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.wrapper}>
        <View style={headerStyles.discoverContainer}>
          <Text style={styles.heading2}>Discover</Text>
          <Text style={styles.bgText}>New York, NY</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.blankButton,
          isFilterActive && { backgroundColor: colors.primary },
        ]}
        onPress={toggleFilter}
      >
        <Ionicons
          name="filter"
          size={32}
          color={isFilterActive ? "white" : colors.primary}
          style={{ textAlign: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    height: 35,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  wrapper: {
    flex: 1,
    alignItems: "flex-start",
  },
  discoverContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
});

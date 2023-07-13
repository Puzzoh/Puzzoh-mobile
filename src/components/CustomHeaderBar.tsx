import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles, { colors } from "../styles/index";

export default function Header() {
  const navigation = useNavigation();

  const handleFilter = () => {
    navigation.navigate("Filter");
  };

  const handleNotification = () => {
    navigation.navigate("Notification");
  };

  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.wrapper}>
        <View style={headerStyles.discoverContainer}>
          <Text style={styles.heading3}>Discover</Text>
          <Text style={[styles.heading5, { color: "gray" }]}>New York, NY</Text>
        </View>
      </View>
      <View style={headerStyles.buttonContainer}>
        <TouchableOpacity style={[styles.blankButton]} onPress={handleFilter}>
          <MaterialCommunityIcons
            name="filter-variant"
            size={32}
            color={colors.primary}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.blankButton]}
          onPress={handleNotification}
        >
          <View style={headerStyles.badgeContainer}>
            {
              <MaterialCommunityIcons
                name="bell"
                size={32}
                color={colors.primary}
                style={{ textAlign: "center" }}
              />
            }
            {/* <View style={headerStyles.badge} /> */}
          </View>
        </TouchableOpacity>
      </View>
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
    zIndex: 999,
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    padding: 20,
  },
  badgeContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "red",
    borderRadius: 8,
    width: 16,
    height: 16,
  },
});

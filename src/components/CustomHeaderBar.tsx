import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import NotificationPopup from "./NotificationPopup";
import styles, { colors } from "../styles/index";

export default function Header() {
  const [isFilterActive, setFilterActive] = useState(false);
  const [isBellActive, setBellActive] = useState(false);
  const [isNotiOpen, setNotiOpen] = useState(false);

  const toggleFilter = () => {
    setFilterActive(!isFilterActive);
  };

  const toggleBell = () => {
    setBellActive(!isBellActive);
    setNotiOpen(!isNotiOpen);
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
        <TouchableOpacity
          style={[
            styles.blankButton,
            isFilterActive && { backgroundColor: colors.primary },
          ]}
          onPress={toggleFilter}
        >
          <MaterialCommunityIcons
            name="filter-variant"
            size={32}
            color={isFilterActive ? "white" : colors.primary}
            style={{ textAlign: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.blankButton,
            isBellActive && { backgroundColor: colors.primary },
          ]}
          onPress={toggleBell}
        >
          <View style={headerStyles.badgeContainer}>
            {!isBellActive && (
              <MaterialCommunityIcons
                name="bell"
                size={32}
                color={isBellActive ? "white" : colors.primary}
                style={{ textAlign: "center" }}
              />
            )}
            {isBellActive && (
              <MaterialCommunityIcons
                name="bell-outline"
                size={32}
                color={isBellActive ? "white" : colors.primary}
                style={{ textAlign: "center" }}
              />
            )}
            {isBellActive && <View style={headerStyles.badge} />}
          </View>
        </TouchableOpacity>
      </View>
      {isNotiOpen && <NotificationPopup onClose={() => setNotiOpen(false)} />}
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

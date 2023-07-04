import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import styles, { colors } from "../styles/index";
import { Ionicons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View style={nStyles.container}>
      <TouchableOpacity
        style={nStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={[nStyles.sectionContainer, { marginTop: 50 }]}>
        <Text style={[styles.heading3, { marginBottom: 12 }]}>
          Notifications
        </Text>
        <View style={nStyles.row}>
          <Text style={styles.heading5}>Push Notifications</Text>
          <Switch
            style={nStyles.switch}
            value={true}
            onValueChange={(value) => {}}
          />
        </View>
        <View style={nStyles.row}>
          <Text style={styles.heading5}>Email Notifications</Text>
          <Switch
            style={nStyles.switch}
            value={false}
            onValueChange={(value) => {}}
          />
        </View>
      </View>

      <View style={nStyles.sectionContainer}>
        <Text style={[styles.heading3, { marginBottom: 12 }]}>Account</Text>

        <TouchableOpacity style={nStyles.row}>
          <Text style={styles.heading5}>Change Password</Text>
          {/* <Image source={require("password_icon.png")} style={nStyles.icon} /> */}
        </TouchableOpacity>
      </View>

      <View style={nStyles.sectionContainer}>
        <Text style={[styles.heading3, { marginBottom: 12 }]}>About</Text>
        <TouchableOpacity style={nStyles.row}>
          <Text style={styles.heading5}>Terms of Service</Text>
          {/* <Image source={require("arrow_icon.png")} style={nStyles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={nStyles.row}>
          <Text style={styles.heading5}>Privacy Policy</Text>
          {/* <Image source={require("arrow_icon.png")} style={nStyles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={nStyles.row}>
          <Text style={styles.heading5}>Contact Us</Text>
          {/* <Image source={require("arrow_icon.png")} style={nStyles.icon} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: 8,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Settings;

import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Auth } from "aws-amplify";
import { colors } from "../styles/index";

export default function SettingsScreen() {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.row}>
          <Text style={styles.optionText}>Push Notifications</Text>
          <Switch
            style={styles.switch}
            value={true}
            onValueChange={(value) => {}}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.optionText}>Email Notifications</Text>
          <Switch
            style={styles.switch}
            value={false}
            onValueChange={(value) => {}}
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.optionText}>Edit Profile</Text>
          {/* <Image source={require("edit_icon.png")} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.optionText}>Change Password</Text>
          {/* <Image source={require("password_icon.png")} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.optionText}>Terms of Service</Text>
          {/* <Image source={require("arrow_icon.png")} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.optionText}>Privacy Policy</Text>
          {/* <Image source={require("arrow_icon.png")} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.optionText}>Contact Us</Text>
          {/* <Image source={require("arrow_icon.png")} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
  },
  switch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  icon: {
    width: 24,
    height: 24,
  },
  logoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { colors } from "../styles/index";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>

      <View style={[styles.sectionContainer, { marginTop: 50 }]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
});

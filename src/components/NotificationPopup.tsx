import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../styles/index";

export default function NotificationPopup({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <MaterialCommunityIcons
              name="close"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text>No new notifications</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "10%",
    paddingHorizontal: "10%",
    width: "80%",
    alignSelf: "center",
    marginTop: "10%",
    marginBottom: "20%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
  },
  closeButton: {
    padding: 8,
  },
  content: {
    alignItems: "center",
  },
});

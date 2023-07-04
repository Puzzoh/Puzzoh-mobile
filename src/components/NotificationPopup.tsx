import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NotificationPopup = ({ onClose, navigation }) => {
  const { colors } = useTheme();

  const handleClose = () => {
    onClose();
    // navigation.goBack();
  };

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
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

export default NotificationPopup;

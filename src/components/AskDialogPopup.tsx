import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import styles from "../styles/index";

const AskDialogPopup = ({ showPopup, handleNo, handleYes, username }) => {
  return (
    <Modal visible={showPopup} animationType="slide" transparent={true}>
      <View style={nStyles.popupContainer}>
        <View style={nStyles.popupContent}>
          <Text style={styles.heading3}>Welcome {username}!</Text>

          <Text style={[styles.heading3, { marginTop: 50 }]}>
            We&apos;d like to ask you a few questions. Your answers to those
            questions will help us tailor your experience better. Would you like
            to continue?
          </Text>

          <View style={nStyles.buttonContainer}>
            <TouchableOpacity onPress={handleNo}>
              <Text style={[styles.highlightText, { color: "black" }]}>
                Maybe later
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleYes}>
              <Text style={styles.highlightText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const nStyles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    height: Dimensions.get("window").height * 0.67,
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});

export default AskDialogPopup;

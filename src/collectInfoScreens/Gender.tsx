import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles, { colors } from "../styles/index";

export default function Gender() {
  const [selected, setSelected] = useState([false, false, false]);
  const [showOption4, setShowOption4] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);
  const [option4Value, setOption4Value] = useState("");
  const [loading, setLoading] = useState(false);

  type RootStackParamList = {
    Pronounce: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = (index) => {
    const newSelected = [false, false, false]; // Reset all selections
    newSelected[index] = true; // Set selected state on pressed button
    setSelected(newSelected);
    if (index !== 2) {
      setShowOption4(false);
      setOption4Value("");
      setOption4Selected(false);
    } else {
      setShowOption4(true); // Show Option 4 input when Option 3 is clicked
    }
  };

  const onNext = async () => {
    if (selected.includes(true) || option4Value !== "") {
      navigation.navigate("Pronounce");
    } else {
      alert("Please select an option before proceeding");
    }
  };

  return (
    <View style={nStyles.container}>
      <Text style={styles.heading2}>I am a</Text>
      <View style={nStyles.spaceSmall} />
      {["Woman", "Man", "Others"].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[nStyles.button, selected[index] ? styles.selected : null]}
          onPress={() => handlePress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
          {index === 2 && <Text style={nStyles.arrow}>{" >"}</Text>}
        </TouchableOpacity>
      ))}
      {showOption4 && (
        <TextInput
          style={[nStyles.option4, styles.input]}
          onChangeText={(text) => setOption4Value(text)}
          value={option4Value}
          placeholder="Type here"
          placeholderTextColor="gray"
          textAlign="center"
        />
      )}
      <View style={nStyles.space} />
      <TouchableOpacity onPress={onNext} style={styles.continueButton}>
        {loading ? (
          <Text style={styles.chosenText}>Loading ...</Text>
        ) : (
          <Text style={styles.chosenText}>Continue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  option4: {
    width: (Dimensions.get("window").width * 5) / 6, // Increased the width
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1, // add border
    borderColor: "black", // set border color
  },
  button: {
    width: (Dimensions.get("window").width * 5) / 6, // Increased the width
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 0.25,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  arrow: {
    fontSize: 20,
    color: "lightgray",
    position: "absolute",
    right: 10,
  },
  input: {
    fontSize: 20,
    color: "black",
  },
  space: {
    height: 120, // This creates space for 2 option buttons
  },
  spaceSmall: {
    height: 20, // This creates a small gap between the heading and the options
  },
});

const DialogPopup = ({ navigation }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    handleContinue(); // Automatically trigger the continue action when the screen loads
  }, []);

  const handleContinue = () => {
    navigation.navigate("SignIn");
    setShowPopup(false);
  };

  const handleExit = () => {
    setShowPopup(false);
  };

  return (
    <Modal visible={showPopup} animationType="slide" transparent={true}>
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text style={styles.popupText}>Popup Content</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleContinue}
              style={[styles.button, styles.continueButton]}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleExit}
              style={[styles.button, styles.exitButton]}
            >
              <Text style={styles.buttonText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  },
  popupText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  continueButton: {
    backgroundColor: "green",
  },
  exitButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

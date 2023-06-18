import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import styles, { colors } from "../styles/index";
import { BackButton } from "../components/CustomButtons";

const Purpose = ({ navigation }) => {
  const [selected, setSelected] = useState([false, false, false]);
  const [loading, setLoading] = useState(false);

  const handlePress = (index) => {
    const newSelected = [false, false, false]; // Reset all selections
    newSelected[index] = true; // Set selected state on pressed button
    setSelected(newSelected);
  };

  const onNext = async () => {
    if (selected.includes(true)) {
      navigation.navigate("Interest");
    } else {
      alert("Please select an option before proceeding");
    }
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Pronounce")} />
      <Text style={styles.heading2}>I am looking for ...</Text>
      <View style={nStyles.spaceSmall} />
      {["making friends", "dating", "Don't know yet, just exploring"].map(
        (option, index) => (
          <TouchableOpacity
            key={index}
            style={[nStyles.button, selected[index] ? styles.selected : null]}
            onPress={() => handlePress(index)}
          >
            <Text
              style={[
                styles.optionText,
                selected[index] ? styles.whitetext : null,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        )
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
};

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
  arrow: {
    fontSize: 20,
    color: "black",
    position: "absolute",
    right: 10,
  },
  space: {
    height: 120, // This creates space for 2 option buttons
  },
  spaceSmall: {
    height: 20, // This creates a small gap between the heading and the options
  },
});

export default Purpose;

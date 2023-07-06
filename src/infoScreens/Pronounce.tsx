import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from @expo/vector-icons
import styles from "../styles/index";
import { BackButton } from "../components/CustomButtons";

const Pronounce = ({ navigation, route }) => {
  const selectedGender = route?.params?.gender;

  const [selected, setSelected] = useState([false, false, false]);
  const [selectedPronounce, setSelectedPronounce] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePress = (index, pronounceValue) => {
    const newSelected = [false, false, false]; // Reset all selections
    newSelected[index] = true; // Set selected state on pressed button
    setSelected(newSelected);
    setSelectedPronounce(pronounceValue);
  };

  const onNext = async () => {
    if (selected.includes(true)) {
      navigation.navigate("Purpose", {
        gender: selectedGender,
        pronounce: selectedPronounce,
      });
    } else {
      alert("Please select an option before proceeding");
    }
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Gender")} />
      <Text style={styles.heading2}>My pronounce is</Text>
      <View style={nStyles.spaceSmall} />
      <View style={nStyles.buttonContainer}>
        {[
          { label: "He/him", icon: "male-outline" },
          { label: "She/her", icon: "female-outline" },
          { label: "They/them", icon: "ellipsis-horizontal-outline" },
        ].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[nStyles.button, selected[index] ? styles.selected : null]}
            onPress={() => handlePress(index, option.label)}
          >
            <Text
              style={[
                styles.optionText,
                { textAlign: "center", paddingLeft: 10, paddingRight: 10 },
                selected[index] ? { color: "white" } : null,
              ]}
            >
              {option.label}
            </Text>
            <Ionicons
              name={option.icon}
              size={20}
              color={selected[index] ? "white" : "black"}
              style={nStyles.icon}
            />
          </TouchableOpacity>
        ))}
      </View>
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
    width: (Dimensions.get("window").width * 5) / 6,
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    width: (Dimensions.get("window").width * 5) / 6,
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
  icon: {
    marginLeft: 10,
  },
  space: {
    height: 120,
  },
  spaceSmall: {
    height: 30,
  },
});

export default Pronounce;

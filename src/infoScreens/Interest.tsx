import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/index";
import { BackButton } from "../components/CustomButtons";

const Interest = ({ navigation, route }) => {
  const selectedGender = route?.params?.gender;
  const selectedPronounce = route?.params?.pronounce;
  const selectedPurpose = route?.params?.purpose;

  const interests = [
    { name: "Traveling", icon: "airplane-outline" },
    { name: "Photo", icon: "camera-outline" },
    { name: "Reading", icon: "book-outline" },
    { name: "Cooking", icon: "restaurant-outline" },
    { name: "Sports", icon: "basketball-outline" },
    { name: "Gaming", icon: "game-controller-outline" },
    { name: "Music", icon: "musical-notes-outline" },
    { name: "Movies", icon: "film-outline" },
    { name: "Gardening", icon: "leaf-outline" },
    { name: "Yoga", icon: "fitness-outline" },
    { name: "Painting", icon: "brush-outline" },
    { name: "Writing", icon: "create-outline" },
  ];

  const [selected, setSelected] = useState(Array(12).fill(false)); // An array of 12 booleans for the 12 options
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePress = (index, interestValue) => {
    let newSelected = [...selected];
    let count = newSelected.reduce((n, x) => n + (x === true), 0);

    if (count < 3 || newSelected[index] === true) {
      newSelected[index] = !newSelected[index]; // Toggle selected state on pressed button
    }

    setSelected(newSelected);

    if (selectedInterest.includes(interestValue)) {
      setSelectedInterest(
        selectedInterest.filter((element) => element !== interestValue)
      );
    } else {
      setSelectedInterest([...selectedInterest, interestValue]);
    }
  };

  const onNext = () => {
    navigation.navigate("FoodPref", {
      gender: selectedGender,
      pronounce: selectedPronounce,
      purpose: selectedPurpose,
      interest: selectedInterest,
    });
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Purpose")} />
      <View style={nStyles.container}>
        <Text style={[styles.heading2, { top: 70 }]}>Your Interest</Text>
        <Text style={styles.subHeading}>
          Select up to 3 of your interest and let us know what you are
          passionate about
        </Text>
        <View style={nStyles.spaceSmall} />
        {Array.from(
          { length: Math.ceil(interests.length / 2) },
          (_, i) => i * 2
        ).map((rowStartIndex) => (
          <View style={nStyles.row} key={rowStartIndex}>
            {interests
              .slice(rowStartIndex, rowStartIndex + 2)
              .map((interest, idx) => {
                const interestIndex = rowStartIndex + idx;
                return (
                  <TouchableOpacity
                    key={interestIndex}
                    style={[
                      nStyles.button,
                      selected[interestIndex] ? styles.selected : null,
                      nStyles.interest, // new style for interests
                    ]}
                    onPress={() => handlePress(interestIndex, interest.name)}
                    disabled={
                      selected.filter(Boolean).length === 3 &&
                      !selected[interestIndex]
                    }
                  >
                    <Ionicons
                      name={interest.icon}
                      size={24}
                      color={selected[interestIndex] ? "white" : "black"}
                      style={nStyles.icon}
                    />
                    <Text
                      style={[
                        styles.optionText,
                        selected[interestIndex] ? styles.whiteText : null,
                      ]}
                    >
                      {interest.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </View>
        ))}
        <View style={nStyles.space} />
        <TouchableOpacity onPress={onNext} style={styles.continueButton}>
          {loading ? (
            <Text style={styles.chosenText}>Loading ...</Text>
          ) : (
            <Text style={styles.chosenText}>Continue</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const nStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    top: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
    marginBottom: 10,
  },
  button: {
    width: Dimensions.get("window").width / 4.5,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  interest: {
    flex: 1,
    margin: 5,
    borderColor: "gray",
    borderWidth: 0.25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 5,
  },
  space: {
    height: 60,
  },
  spaceSmall: {
    height: 60,
  },
});

export default Interest;

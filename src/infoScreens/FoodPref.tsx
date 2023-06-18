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

const Interest = ({ navigation }) => {
  const [selected, setSelected] = useState(Array(12).fill(false)); // An array of 12 booleans for the 12 options
  const foodPref = [
    "Vegan",
    "Mediterranean",
    "Italian",
    "Chinese",
    "Japanese",
    "Mexican",
    "American",
    "Greek",
    "Spanish",
    "Korean",
    "Vietnamese",
    "Dessert",
  ];
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handlePress = (index) => {
    let newSelected = [...selected];
    let count = newSelected.reduce((n, x) => n + (x === true), 0);

    if (count < 3 || newSelected[index] === true) {
      newSelected[index] = !newSelected[index]; // Toggle selected state on pressed button
    }

    setSelected(newSelected);
  };

  const onDone = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Interest")} />
      <View style={nStyles.container}>
        <Text style={nStyles.heading}>Food Preferences</Text>
        <Text style={nStyles.subHeading}>
          Select up to 3 of your favorite cuisines and let us know what you like
        </Text>
        <View style={nStyles.spaceSmall} />
        {Array.from(
          { length: Math.ceil(foodPref.length / 2) },
          (_, i) => i * 2
        ).map((rowStartIndex) => (
          <View style={nStyles.row} key={rowStartIndex}>
            {foodPref
              .slice(rowStartIndex, rowStartIndex + 2)
              .map((interest, idx) => {
                const interestIndex = rowStartIndex + idx;
                return (
                  <TouchableOpacity
                    key={interestIndex}
                    style={[
                      nStyles.button,
                      selected[interestIndex] ? nStyles.selected : null,
                      nStyles.interest, // new style for interests
                    ]}
                    onPress={() => handlePress(interestIndex)}
                    disabled={
                      selected.filter(Boolean).length === 3 &&
                      !selected[interestIndex]
                    }
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selected[interestIndex] ? styles.whitetext : null,
                      ]}
                    >
                      {interest}
                    </Text>
                    {/* replace this text with your icon */}
                  </TouchableOpacity>
                );
              })}
          </View>
        ))}
        <View style={nStyles.space} />
        <TouchableOpacity onPress={onDone} style={styles.continueButton}>
          {loading ? (
            <Text style={styles.chosenText}>Loading ...</Text>
          ) : (
            <Text style={styles.chosenText}>Done</Text>
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
    //justifyContent: 'center',
    alignItems: "center",
  },
  heading: {
    fontSize: 32,
    fontFamily: "Lexend",
    marginBottom: 20,
    top: 50,
    bottom: 10,
  },
  subHeading: {
    top: 35,
    fontSize: 13,
    fontFamily: "Lexend",
    flexWrap: "wrap",
    marginLeft: 15,
    marginRight: 15,
  },
  row: {
    top: 30,
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
  selected: {
    backgroundColor: colors.primary,
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
  space: {
    height: 35,
  },
  spaceSmall: {
    height: 20,
  },
});

export default Interest;

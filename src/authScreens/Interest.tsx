import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles, { colors } from "../styles/index";
const Interest = () => {
  const [selected, setSelected] = useState(Array(12).fill(false)); // An array of 12 booleans for the 12 options
  const interests = [
    "Traveling",
    "Photo",
    "Reading",
    "Cooking",
    "Sports",
    "Gaming",
    "Music",
    "Movies",
    "Gardening",
    "Yoga",
    "Painting",
    "Writing",
  ];
  type RootStackParamList = {
    FoodPref: undefined;
    Purpose: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePress = (index) => {
    let newSelected = [...selected];
    let count = newSelected.reduce((n, x) => n + (x === true), 0);

    if (count < 3 || newSelected[index] === true) {
      newSelected[index] = !newSelected[index]; // Toggle selected state on pressed button
    }

    setSelected(newSelected);
  };

  const onNext = () => {
    navigation.navigate("FoodPref");
  };

  return (
    <View style={nstyles.container}>
      <View style={styles.skipWrapper}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: pressed ? '#FFDAB9' : colors.primary }]}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          onPress={() => navigation.navigate("Purpose")}>
          <Text style={styles.skipText}>&lt;</Text>
        </TouchableOpacity>
      </View>
      <View style={nstyles.container}>
        <View style={styles.skipWrapper}>
          <TouchableOpacity
            style={[styles.skipButton, { backgroundColor: pressed ? '#FFDAB9' : colors.primary }]}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={() => navigation.navigate("FoodPref")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.interestheading}>Your Interest</Text>
        <Text style={styles.subHeading}>
          Select up to 3 of your interest and let us know what you are
          passionate about
        </Text>
        <View style={nstyles.spaceSmall} />
        {Array.from(
          { length: Math.ceil(interests.length / 2) },
          (_, i) => i * 2
        ).map((rowStartIndex) => (
          <View style={nstyles.row} key={rowStartIndex}>
            {interests
              .slice(rowStartIndex, rowStartIndex + 2)
              .map((interest, idx) => {
                const interestIndex = rowStartIndex + idx;
                return (
                  <TouchableOpacity
                    key={interestIndex}
                    style={[
                      nstyles.button,
                      selected[interestIndex] ? styles.selected : null,
                      nstyles.interest, // new style for interests
                    ]}
                    onPress={() => handlePress(interestIndex)}
                    disabled={
                      selected.filter(Boolean).length === 3 &&
                      !selected[interestIndex]
                    }
                  >
                    <Text style={styles.optionText}>{interest}</Text>
                    {/* replace this text with your icon */}
                  </TouchableOpacity>
                );
              })}
          </View>
        ))}
        <View style={nstyles.space} />
        <TouchableOpacity
          onPress={onNext}
          style={styles.continueButton}
        >
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

const nstyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: "center",
  },
  subHeading: {
    top: 35,
    fontSize: 13,
    flexWrap: "wrap",
    marginLeft: 15,
    marginRight: 15,
  },
  skipWrapper: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10,
  },
  backText: {
    fontSize: 15,
    color: 'black',
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
  selected: {
    backgroundColor: colors.primary,
  },
  largeButton: {
    width: (Dimensions.get("window").width * 5) / 6,
    height: 60,
  },
  text: {
    fontSize: 15,
  },
  interest: {
    flex: 1,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  space: {
    height: 60,
  },
  spaceSmall: {
    height: 60,
  },
});

export default Interest;

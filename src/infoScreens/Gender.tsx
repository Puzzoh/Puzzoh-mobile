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
import styles from "../styles/index";
import AskDialogPopup from "../components/AskDialogPopup";
import OtherGender from "../components/OtherGenderPopup";

const Gender = ({ navigation, route }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showOtherGender, setShowOtherGender] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleLater = async () => {
    navigation.navigate("Main");
  };

  const handleContinue = () => {
    setShowPopup(false);
  };

  const handleDone = () => {
    setShowOtherGender(false);
  };

  const [selected, setSelected] = useState([false, false, false]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [showOption4, setShowOption4] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);
  const [option4Value, setOption4Value] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePress = (index, genderValue) => {
    const newSelected = [false, false, false];
    newSelected[index] = true;
    setSelected(newSelected);
    setSelectedGender(genderValue);
    if (index === 2) {
      setShowOtherGender(true);
    }
  };

  const onNext = async () => {
    if (
      selected.includes(true) ||
      (showOption4 && option4Value.trim() !== "")
    ) {
      navigation.navigate("Pronounce", { gender: selectedGender });
    } else {
      alert("Please select an option before proceeding");
    }
  };

  return (
    <View style={nStyles.container}>
      <AskDialogPopup
        showPopup={showPopup}
        handleYes={handleContinue}
        handleNo={handleLater}
        username={route?.params?.username}
      />
      {showOtherGender && <OtherGender onDone={handleDone} />}
      <View style={nStyles.headingContainer}>
        <Text style={styles.heading2}>I am a</Text>
      </View>

      <View style={nStyles.optionsContainer}>
        {["Man", "Woman", "LGBTQ+", "Prefer not to identify"].map(
          (option, index) => (
            <TouchableOpacity
              key={index}
              style={[nStyles.button, selected[index] ? styles.selected : null]}
              onPress={() => handlePress(index, option)}
            >
              <Text
                style={[
                  styles.optionText,
                  { textAlign: "center", paddingLeft: 10, paddingRight: 10 },
                  selected[index] ? styles.whiteText : null,
                ]}
              >
                {option}
              </Text>
              {index === 2 && <Text style={nStyles.arrow}>{" >"}</Text>}
            </TouchableOpacity>
          )
        )}
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
      </View>

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
  headingContainer: {
    marginTop: -10,
  },
  optionsContainer: {
    justifyContent: "space-between",
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
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
    color: "lightgray",
    position: "absolute",
    right: 10,
  },
  space: {
    height: 120,
  },
  spaceSmall: {
    height: 10,
  },
});

export default Gender;

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
import { useRoute } from "@react-navigation/native";
import styles, { colors } from "../styles/index";
import AskDialogPopup from "../components/AskDialogPopup";
import OtherGender from "../components/OtherGenderPopup";
import { useMutation, gql } from "@apollo/client";
import { createUser } from "../graphql/mutations";
import { Auth } from "aws-amplify";

export default function Gender({ navigation }) {
  const CREATE_USER = gql(createUser);
  const [createUserMutation] = useMutation(CREATE_USER);

  const createUserInfo = async () => {
    try {
      const currUser = await Auth.currentAuthenticatedUser();
      const { username } = currUser;
      const email = currUser.attributes.email;
      const id = currUser.attributes.sub;

      const { data } = await createUserMutation({
        variables: {
          input: {
            id,
            username,
            email,
          },
        },
      });

      console.log("User created:", data.createUser);
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  const route = useRoute();

  const [showPopup, setShowPopup] = useState(false);
  const [showOtherGender, setShowOtherGender] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleLater = async () => {
    await createUserInfo();
    navigation.navigate("SignIn");
    // setShowPopup(false);
  };

  const handleContinue = () => {
    setShowPopup(false);
  };

  const handleDone = () => {
    setShowOtherGender(false);
  };

  const [selected, setSelected] = useState([false, false, false]);
  const [showOption4, setShowOption4] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);
  const [option4Value, setOption4Value] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePress = (index) => {
    const newSelected = [false, false, false]; // Reset all selections
    newSelected[index] = true; // Set selected state on pressed button
    setSelected(newSelected);
    if (index === 2) {
      setShowOtherGender(true);
    }
  };

  const onNext = async () => {
    if (
      selected.includes(true) ||
      (showOption4 && option4Value.trim() !== "")
    ) {
      navigation.navigate("Pronounce");
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
}

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headingContainer: {
    marginTop: -10, // Increased the negative margin to move the content up
  },
  optionsContainer: {
    justifyContent: "space-between",
    marginTop: 40, // Decrease the margin to move options up
    // Remove the fixed height to let it adjust based on the content
    width: "100%",
    paddingHorizontal: 20, // Add some padding for better spacing
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
    color: "lightgray",
    position: "absolute",
    right: 10,
  },
  space: {
    height: 120, // This creates space for 2 option buttons
  },
  spaceSmall: {
    height: 10, // This creates a small gap between the heading and the options
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles, { colors } from "../styles/index";
import Checkbox from "expo-checkbox";
import { gql, useMutation } from "@apollo/client";
import { updateUser } from "../graphql/mutations";

const EditInfo = ({ navigation, route }) => {
  const UPDATE_USER = gql(updateUser);
  const [updateUserMutation] = useMutation(UPDATE_USER);

  const { user } = route?.params;

  const updateUserInfo = async () => {
    try {
      const { data } = await updateUserMutation({
        variables: {
          input: {
            id: user.id,
            // username: username,
            gender: gender,
            pronounce: pronounce,
            bio: bio,
            purpose: purpose,
            interest: selectedInterest,
            foodPref: selectedFoodPref,
          },
        },
      });

      console.log("User updated:", data.updateUser);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const [username, setUsername] = useState(user.username);
  const [pronounce, setPronounce] = useState(user.pronounce);
  const [bio, setBio] = useState(user.bio);
  const [purpose, setPurpose] = useState(user.purpose);
  const [gender, setGender] = useState(user.gender);
  const [interestOptions, setInterestOptions] = useState(Array(12).fill(false));
  const [foodPrefOptions, setFoodPrefOptions] = useState(Array(12).fill(false));
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [selectedFoodPref, setSelectedFoodPref] = useState([]);
  const [location, setLocation] = useState("");

  const handlePressInterest = (index, interestValue) => {
    let newSelected = [...interestOptions];
    let count = newSelected.reduce((n, x) => n + (x === true), 0);

    if (count < 3 || newSelected[index] === true) {
      newSelected[index] = !newSelected[index];
    }

    setInterestOptions(newSelected);

    if (selectedInterest.includes(interestValue)) {
      setSelectedInterest(
        selectedInterest.filter((element) => element !== interestValue)
      );
    } else {
      setSelectedInterest([...selectedInterest, interestValue]);
    }
  };

  const handlePressFoodPref = (index, foodPrefValue) => {
    let newSelected = [...foodPrefOptions];
    let count = newSelected.reduce((n, x) => n + (x === true), 0);

    if (count < 3 || newSelected[index] === true) {
      newSelected[index] = !newSelected[index];
    }

    setFoodPrefOptions(newSelected);

    if (selectedFoodPref.includes(foodPrefValue)) {
      setSelectedFoodPref(
        selectedFoodPref.filter((element) => element !== foodPrefValue)
      );
    } else {
      setSelectedFoodPref([...selectedFoodPref, foodPrefValue]);
    }
  };

  // useEffect(() => {
  //   for (let i = 0; i < user.foodPref.length; i++) {
  //     handlePressFoodPref(
  //       Object.keys(foodPref).find((key) => foodPref[key] === user.foodPref[i]),
  //       user.foodPref[i]
  //     );
  //   }
  // }, []);

  const handleSave = async () => {
    await updateUserInfo();
    navigation.goBack();
  };

  const fetchCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      const locationData = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = locationData.coords;
      console.log("Current Location:", latitude, longitude);
    } catch (error) {
      console.log("Error fetching current location:", error);
    }
  };

  return (
    <View style={nStyles.container}>
      <TouchableOpacity
        style={nStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>
      <ScrollView>
        <View style={[nStyles.inputContainer, { marginTop: 50 }]}>
          <Text style={styles.heading5}>USERNAME</Text>
          <TextInput
            style={[styles.bodyText1, nStyles.input]}
            value={username}
            onChangeText={setUsername}
            editable={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={[
                styles.bodyText2,
                { marginTop: 4, color: colors.primary },
              ]}
            >
              Request to change username
            </Text>
          </TouchableOpacity>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>GENDER</Text>
          {["Man", "Woman", "LGBTQ+"].map((option) => (
            <View style={nStyles.optionsContainer} key={option}>
              <TouchableOpacity
                style={[
                  nStyles.option,
                  gender === option && {
                    ...nStyles.optionSelected,
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setGender(option)}
                key={option}
              >
                <Text
                  style={[
                    styles.optionText,
                    gender === option
                      ? { color: "white" }
                      : {
                          textAlign: "center",
                          paddingLeft: 10,
                          paddingRight: 10,
                        },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>PRONOUNCE</Text>
          {["He/him", "She/her", "They/them"].map((option) => (
            <View style={nStyles.optionsContainer} key={option}>
              <TouchableOpacity
                style={[
                  nStyles.option,
                  pronounce === option && {
                    ...nStyles.optionSelected,
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setPronounce(option)}
                key={option}
              >
                <Text
                  style={[
                    styles.optionText,
                    pronounce === option
                      ? { color: "white" }
                      : {
                          textAlign: "center",
                          paddingLeft: 10,
                          paddingRight: 10,
                        },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>BIO</Text>
          <TextInput
            style={[styles.bodyText2, nStyles.input]}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
          />
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>PURPOSE</Text>
          {["making friends", "dating", "just exploring"].map((option) => (
            <View style={nStyles.optionsContainer} key={option}>
              <TouchableOpacity
                style={[
                  nStyles.option,
                  purpose === option && {
                    ...nStyles.optionSelected,
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setPurpose(option)}
              >
                <Text
                  style={[
                    styles.optionText,
                    purpose === option
                      ? { color: "white" }
                      : {
                          textAlign: "center",
                          paddingLeft: 10,
                          paddingRight: 10,
                        },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>INTERESTS</Text>
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
                        interestOptions[interestIndex] ? styles.selected : null,
                        nStyles.interest,
                      ]}
                      onPress={() =>
                        handlePressInterest(interestIndex, interest.name)
                      }
                      disabled={
                        interestOptions.filter(Boolean).length === 3 &&
                        !interestOptions[interestIndex]
                      }
                    >
                      <Ionicons
                        name={interest.icon}
                        size={24}
                        color={
                          interestOptions[interestIndex] ? "white" : "black"
                        }
                        style={{ marginRight: 5 }}
                      />
                      <Text
                        style={[
                          styles.optionText,
                          {
                            textAlign: "center",
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                          interestOptions[interestIndex]
                            ? { color: "white" }
                            : null,
                        ]}
                      >
                        {interest.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>FOOD PREFERENCES</Text>
          {Array.from(
            { length: Math.ceil(foodPref.length / 2) },
            (_, i) => i * 2
          ).map((rowStartIndex) => (
            <View style={nStyles.row} key={rowStartIndex}>
              {foodPref
                .slice(rowStartIndex, rowStartIndex + 2)
                .map((foodPref, idx) => {
                  const foodPrefIndex = rowStartIndex + idx;
                  return (
                    <TouchableOpacity
                      key={foodPrefIndex}
                      style={[
                        nStyles.button,
                        foodPrefOptions[foodPrefIndex] ? styles.selected : null,
                        nStyles.interest,
                      ]}
                      onPress={() =>
                        handlePressFoodPref(foodPrefIndex, foodPref)
                      }
                      disabled={
                        foodPrefOptions.filter(Boolean).length === 3 &&
                        !foodPrefOptions[foodPrefIndex]
                      }
                    >
                      <Text
                        style={[
                          styles.optionText,
                          {
                            textAlign: "center",
                            paddingLeft: 10,
                            paddingRight: 10,
                          },
                          foodPrefOptions[foodPrefIndex]
                            ? { color: "white" }
                            : null,
                        ]}
                      >
                        {foodPref}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>LOCATION</Text>
          <GooglePlacesAutocomplete
            placeholder="Enter your location"
            onPress={(data, details = null) => {
              setLocation(data.description);
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            styles={googlePlacesStyles}
            query={{
              key: process.env.GOOGLE_PLACES_API_KEY,
              language: "en",
              types: "geocode",
            }}
            debounce={300}
            currentLocation={false}
          />
        </View>
        <TouchableOpacity style={nStyles.saveButton} onPress={handleSave}>
          <Text style={[styles.heading5, { color: "white" }]}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
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
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
  saveButton: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 24,
  },
  input: {
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
  },
  datePickerStyle: {
    width: 200,
    backgroundColor: "#fff",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 8,
  },
  option: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  optionSelected: {
    borderColor: colors.primary,
  },
  button: {
    width: screenWidth / 4.5,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});

const googlePlacesStyles = StyleSheet.create({
  container: {
    width: screenWidth - 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
  },
  radioButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  listView: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    elevation: 5,
    zIndex: 100,
  },
  row: {
    padding: 13,
    height: 44,
  },
  separator: {
    height: 0.5,
    backgroundColor: "#919191",
  },
});

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

export default EditInfo;

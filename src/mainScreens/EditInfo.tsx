import React, { useState } from "react";
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
            // interest: interest,
            // foodPref: foodPref,
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
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    await updateUserInfo();
    navigation.goBack();
  };
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedFoodPreferences, setSelectedFoodPreferences] = useState([]);

  const handleInterestChange = (interest) => {
    setSelectedInterests((prevState) => {
      if (prevState.includes(interest)) {
        return prevState.filter((i) => i !== interest);
      } else if (prevState.length < 3) {
        return [...prevState, interest];
      } else {
        return prevState;
      }
    });
  };

  const handleFoodPreferenceChange = (preference) => {
    setSelectedFoodPreferences((prevState) => {
      if (prevState.includes(preference)) {
        return prevState.filter((p) => p !== preference);
      } else if (prevState.length < 3) {
        return [...prevState, preference];
      } else {
        return prevState;
      }
    });
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
          <Text style={styles.heading5}>Username</Text>
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
          <Text style={styles.heading5}>Gender</Text>
          <View style={nStyles.optionsContainer}>
            {["Man", "Woman", "LGBTQ+"].map((option) => (
              <TouchableOpacity
                style={[
                  nStyles.option,
                  gender === option && {
                    ...nStyles.optionSelected,
                    backgroundColor: colors.primary,
                  },
                ]}
                onPress={() => setGender(option)}
              >
                <Text
                  style={[
                    styles.bodyText2,
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
            ))}
          </View>
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>Pronounce</Text>
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
              >
                <Text
                  style={[
                    styles.bodyText2,
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
          <Text style={styles.heading5}>Bio</Text>
          <TextInput
            style={[styles.bodyText2, nStyles.input]}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
          />
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>Purpose</Text>
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
                    styles.bodyText2,
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
          <Text style={styles.heading5}>Interest</Text>
          {interests.map((interest) => (
            <View
              key={interest}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Checkbox
                value={selectedInterests.includes(interest)}
                onValueChange={() => handleInterestChange(interest)}
                color={
                  selectedInterests.includes(interest)
                    ? colors.primary
                    : undefined
                }
              />
              <Text style={[styles.bodyText2, nStyles.checkboxLabel]}>
                {interest}
              </Text>
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>Food Preference</Text>
          {foodPreferences.map((preference) => (
            <View
              key={preference}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Checkbox
                value={selectedFoodPreferences.includes(preference)}
                onValueChange={() => handleFoodPreferenceChange(preference)}
                color={
                  selectedFoodPreferences.includes(preference)
                    ? colors.primary
                    : undefined
                }
              />
              <Text style={[styles.bodyText2, nStyles.checkboxLabel]}>
                {preference}
              </Text>
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={styles.heading5}>Location</Text>
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
        <TouchableOpacity style={nStyles.button} onPress={handleSave}>
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
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
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
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
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

const foodPreferences = [
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

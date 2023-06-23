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
import DatePicker from "react-native-datepicker";
import Slider from "@react-native-community/slider";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { colors } from "../styles/index";
import Checkbox from "expo-checkbox";

const screenWidth = Dimensions.get("window").width;
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

const EditProfileInfoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [pronounce, setPronounce] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState(18);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
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
          <Text style={nStyles.inputLabel}>Username</Text>
          <TextInput
            style={nStyles.input}
            placeholder="Username"
            value={username}
            editable={false}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={nStyles.requestChangeText}>
              Request to change username
            </Text>
          </TouchableOpacity>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Gender</Text>
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
                  style={
                    gender === option ? { color: "white" } : nStyles.optionText
                  }
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Pronounce</Text>
          {["he/him", "she/her", "they/them"].map((option) => (
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
                  style={
                    purpose === option ? { color: "white" } : nStyles.optionText
                  }
                >
                  {option}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Bio</Text>
          <TextInput
            style={nStyles.input}
            placeholder="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
          />
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Birthday</Text>
          <DatePicker
            style={nStyles.datePickerStyle}
            date={birthday}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setBirthday(date);
            }}
          />
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Purpose</Text>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Purpose</Text>
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
                  style={
                    purpose === option ? { color: "white" } : nStyles.optionText
                  }
                >
                  {option}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Age Range</Text>
          <Slider
            style={{ width: screenWidth - 60, height: 40 }}
            minimumValue={18}
            maximumValue={65}
            step={1}
            value={ageRange}
            onValueChange={(value) => setAgeRange(value)}
          />
          <Text>{ageRange}</Text>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Interest</Text>
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
              <Text style={nStyles.checkboxLabel}>{interest}</Text>
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Food Preference</Text>
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
              <Text style={nStyles.checkboxLabel}>{preference}</Text>
            </View>
          ))}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Location</Text>
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
          <Text style={nStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

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
  inputLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
  },
  datePickerStyle: {
    width: 200,
    backgroundColor: "#fff",
  },
  requestChangeText: {
    color: colors.primary,
    marginTop: 4,
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
  optionText: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
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
  textInputContainer: {
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: 16,
    color: "#333",
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

export default EditProfileInfoScreen;

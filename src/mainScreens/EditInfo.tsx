import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
import Slider from "@react-native-community/slider";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const EditProfileInfoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [pronounce, setPronounce] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState([18, 60]);
  const [location, setLocation] = useState("");

  const handleSave = () => {
    // Save profile info logic
    navigation.goBack();
  };

  const formatAgeRangeText = () => {
    const [minAge, maxAge] = ageRange;
    return `${minAge} - ${maxAge} years`;
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
            onChangeText={setUsername}
          />
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Gender</Text>
          <View style={nStyles.optionsContainer}>
            {["Man", "Woman", "LGBTQ+", "Prefer not to identify"].map(
              (option, index) => (
                <TouchableOpacity
                  style={[
                    nStyles.option,
                    gender === option && nStyles.optionSelected,
                  ]}
                  onPress={() => setGender(option)}
                >
                  <Text style={nStyles.optionText}>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Pronounce</Text>
          <View style={nStyles.optionsContainer}>
            {["He/him", "She/her", "They/them"].map((option, index) => (
              <TouchableOpacity
                style={[
                  nStyles.option,
                  pronounce === option && nStyles.optionSelected,
                ]}
                onPress={() => setPronounce(option)}
              >
                <Text style={nStyles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
            date={birthday} //initial date from state
            mode="date" //The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2019"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
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
          <View style={nStyles.optionsContainer}>
            {["making friends", "dating", "just exploring"].map(
              (option, index) => (
                <TouchableOpacity
                  style={[
                    nStyles.option,
                    purpose === option && nStyles.optionSelected,
                  ]}
                  onPress={() => setPurpose(option)}
                >
                  <Text style={nStyles.optionText}>{option}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Age Range</Text>
          {/* <Slider
          style={nStyles.slider}
          minimumValue={18}
          maximumValue={60}
          step={1}
          value={[18, 20]}
          onValueChange={(value) => setAgeRange(value)}
        /> */}
          {/* <Text style={nStyles.sliderValue}>{formatAgeRangeText()}</Text> */}
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Interest</Text>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Food Preference</Text>
        </View>
        <View style={nStyles.inputContainer}>
          <Text style={nStyles.inputLabel}>Location</Text>
          {/* <GooglePlacesAutocomplete
            placeholder="Enter your location"
            onPress={(data, details = null) => {
              // Handle selected location
              console.log(data, details);
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
          /> */}
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
    top: 16,
    left: 16,
    padding: 8,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  option: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderColor: "#ccc",
  },
  optionSelected: {
    backgroundColor: "#333",
  },
  optionText: {
    textAlign: "center",
    color: "#333",
  },
  slider: {
    marginBottom: 8,
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  datePickerStyle: {
    width: 200,
  },
});

const googlePlacesStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    width: "100%",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  listView: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default EditProfileInfoScreen;

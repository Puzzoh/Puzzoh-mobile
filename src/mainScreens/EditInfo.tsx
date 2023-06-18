import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
import Slider from "@react-native-community/slider";

const EditProfileInfoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState([18, 60]);
  const [location, setLocation] = useState("");

  const formatAgeRangeText = () => {
  //   const [minAge, maxAge] = ageRange;
  //   return `${minAge} - ${maxAge} years`;
  // };

  const handleSave = ({ navigation }) => {
    // Save profile info logic
  };

  const RenderSlider = (optionsArray, onSlidingComplete) => (
    <Slider
      style={nStyles.slider}
      minimumValue={18}
      maximumValue={60}
      step={1}
      value={optionsArray.indexOf(20)}
      onSlidingComplete={(value) => onSlidingComplete(optionsArray[value])}
    />
  );

  const ageRangeArray = [18, 20, 25, 30, 35, 40, 45, 50, 60];

  return (
    <View style={nStyles.container}>
      <TouchableOpacity
        style={nStyles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
      </TouchableOpacity>
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
        <TextInput
          style={nStyles.input}
          placeholder="Purpose"
          value={purpose}
          onChangeText={setPurpose}
        />
      </View>
      <View style={nStyles.inputContainer}>
        <Text style={nStyles.inputLabel}>Gender</Text>
        <View style={nStyles.genderContainer}>
          <TouchableOpacity
            style={[
              nStyles.genderOption,
              gender === "Men" && nStyles.genderOptionSelected,
            ]}
            onPress={() => setGender("Men")}
          >
            <Text style={nStyles.genderOptionText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              nStyles.genderOption,
              gender === "Woman" && nStyles.genderOptionSelected,
            ]}
            onPress={() => setGender("Woman")}
          >
            <Text style={nStyles.genderOptionText}>Woman</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              nStyles.genderOption,
              gender === "LGBTQ+" && nStyles.genderOptionSelected,
            ]}
            onPress={() => setGender("LGBTQ+")}
          >
            <Text style={nStyles.genderOptionText}>LGBTQ+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              nStyles.genderOption,
              gender === "Prefer Not to Say" && nStyles.genderOptionSelected,
            ]}
            onPress={() => setGender("Prefer Not to Say")}
          >
            <Text style={nStyles.genderOptionText}>Prefer Not to Say</Text>
          </TouchableOpacity>
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
        <RenderSlider optionsArray={ageRangeArray} />
        {/* <Text style={nStyles.sliderValue}>{formatAgeRangeText()}</Text> */}
      </View>
      <View style={nStyles.inputContainer}>
        <Text style={nStyles.inputLabel}>Location</Text>
        <TextInput
          style={nStyles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <TouchableOpacity style={nStyles.button} onPress={handleSave}>
        <Text style={nStyles.buttonText}>Save</Text>
      </TouchableOpacity>
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
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderOption: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderColor: "#ccc",
  },
  genderOptionSelected: {
    backgroundColor: "#333",
  },
  genderOptionText: {
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

export default EditProfileInfoScreen;

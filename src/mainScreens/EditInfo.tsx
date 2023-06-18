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

const EditProfileInfoScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [purpose, setPurpose] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [location, setLocation] = useState("");

  const handleSave = ({ navigation }) => {
    // Save profile info logic
  };

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
        <TextInput
          style={nStyles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
      </View>
      <View style={nStyles.inputContainer}>
        <Text style={nStyles.inputLabel}>Age Range</Text>
        <TextInput
          style={nStyles.input}
          placeholder="Age range"
          value={ageRange}
          onChangeText={setAgeRange}
        />
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

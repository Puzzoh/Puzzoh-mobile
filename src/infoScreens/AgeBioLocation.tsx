import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles, { colors } from "../styles/index";
import { BackButton } from "../components/CustomButtons";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Auth } from "aws-amplify";
import { gql, useMutation } from "@apollo/client";
import { updateUser } from "../graphql/mutations";

const AgeBioLocation = ({ navigation, route }) => {
  //   console.log(route.params);
  const selectedGender = route?.params?.gender;
  const selectedPronounce = route?.params?.pronounce;
  const selectedPurpose = route?.params?.purpose;
  const selectedInterests = route?.params?.interest;
  const selectedFoodPrefs = route?.params?.foodPref;

  const UPDATE_USER = gql(updateUser);
  const [updateUserMutation] = useMutation(UPDATE_USER);

  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState("18");
  const [bio, setBio] = useState(null);
  const [location, setLocation] = useState(null);

  // const fetchCurrentLocation = async () => {
  //   try {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied");
  //       return;
  //     }
  //     const locationData = await Location.getCurrentPositionAsync({});
  //     const { latitude, longitude } = locationData.coords;
  //     console.log("Current Location:", latitude, longitude);
  //   } catch (error) {
  //     console.log("Error fetching current location:", error);
  //   }
  // };

  const updateUserInfo = async () => {
    try {
      const currUser = await Auth.currentAuthenticatedUser();
      const id = currUser.attributes.sub;

      const { data } = await updateUserMutation({
        variables: {
          input: {
            id,
            gender: selectedGender,
            pronounce: selectedPronounce,
            purpose: selectedPurpose,
            interest: selectedInterests,
            foodPref: selectedFoodPrefs,
            age: parseInt(age, 10),
            bio: bio,
            location: location,
          },
        },
      });

      console.log("User updated:", data.updateUser);
    } catch (error) {
      console.log("Error updating user:", error);
    }
  };

  const onDone = async () => {
    await updateUserInfo();
    navigation.navigate("Home");
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Interest")} />
      <View style={[{ marginBottom: 20 }]}>
        <Text style={[styles.heading2, nStyles.heading]}>
          Other Personal Info
        </Text>
      </View>
      <View style={nStyles.container}>
        <Text style={[styles.heading4, { marginBottom: 20 }]}>Age</Text>
        <View style={[{ marginBottom: 20 }]}>
          <TextInput
            style={[styles.bodyText2, nStyles.input]}
            placeholder="Enter your Age"
            value={age}
            onChangeText={setAge}
          />
        </View>

        <View style={[{ marginBottom: 20 }]}>
          <Text style={[styles.heading4, { marginBottom: 20 }]}>Bio</Text>
          <TextInput
            style={[styles.bodyText2, nStyles.bioinput]}
            placeholder="Enter your Bio"
            value={bio}
            onChangeText={setBio}
          />
        </View>

        <View style={[{ marginBottom: 20 }]}>
          <Text style={[styles.heading4, { marginBottom: 20 }]}>Location</Text>
          <TextInput
            style={[styles.bodyText2, nStyles.input]}
            placeholder="Enter your location"
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <TouchableOpacity
          onPress={onDone}
          style={[styles.continueButton, nStyles.button]}
        >
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

const screenWidth = Dimensions.get("window").width;

const nStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heading: {
    marginBottom: 20,
    top: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    height: 40,
    textAlignVertical: "top",
  },
  bioinput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    height: 90,
    textAlignVertical: "top",
  },
  button: {
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 24,
  },
});

export default AgeBioLocation;

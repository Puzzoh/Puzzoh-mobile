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
    navigation.navigate("Main");
  };

  return (
    <View style={nStyles.container}>
      <BackButton onPress={() => navigation.navigate("Interest")} />
      <View style={nStyles.container}>
        <Text style={[styles.heading2, { marginBottom: 20, top: 20 }]}>
          Age
        </Text>
        <TextInput
          style={[styles.bodyText2, nStyles.input]}
          placeholder="18"
          value={age}
          onChangeText={setAge}
        />
        <Text style={[styles.heading2, { marginBottom: 20, top: 20 }]}>
          Bio
        </Text>
        <TextInput
          style={[styles.bodyText2, nStyles.input]}
          placeholder="Bio"
          value={bio}
          onChangeText={setBio}
        />

        <Text style={[styles.heading2, { marginBottom: 20, top: 20 }]}>
          Location
        </Text>
        <TextInput
          style={[styles.bodyText2, nStyles.input]}
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
        />
        {/* <GooglePlacesAutocomplete
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
        /> */}
        <TouchableOpacity onPress={onDone} style={styles.continueButton}>
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
    alignItems: "center",
  },
  input: {
    height: 100,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 100,
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

export default AgeBioLocation;

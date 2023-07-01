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
import Slider from "@react-native-community/slider";
import { colors } from "../styles/index";

const EditFilter = ({ navigation, route }) => {
  const [ageRange, setAgeRange] = useState(18);

  const handleSave = async () => {
    // navigation.goBack();
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

        <TouchableOpacity style={nStyles.button} onPress={handleSave}>
          <Text style={nStyles.buttonText}>Save</Text>
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
});

export default EditFilter;

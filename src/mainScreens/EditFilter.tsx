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
import styles, { colors } from "../styles/index";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const EditFilter = ({ navigation, route }) => {
  const [values, setValues] = useState([18, 65]);

  const handleValuesChange = (newValues) => {
    setValues(newValues);
  };

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
          <Text style={styles.heading5}>AGE RANGE</Text>
          <View style={nStyles.sliderContainer}>
            <Text style={styles.heading5}>{values[0]}</Text>
            <Text style={styles.heading5}>{values[1]} </Text>
          </View>
          <View style={nStyles.sliderWrapper}>
            <MultiSlider
              values={values}
              sliderLength={280}
              onValuesChange={handleValuesChange}
              min={18}
              max={65}
              step={1}
              allowOverlap={false}
              snapped
            />
          </View>
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
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  sliderWrapper: {
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
  inputContainer: {
    marginTop: 40,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    height: 44,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditFilter;

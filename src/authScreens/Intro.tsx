import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Intro() {
  const [selected, setSelected] = useState([false, false, false]);
  const [showOption4, setShowOption4] = useState(false);
  const [option4Selected, setOption4Selected] = useState(false);
  const [option4Value, setOption4Value] = useState("");

  type RootStackParamList = {
    Pronounce: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = index => {
    const newSelected = [false, false, false]; // Reset all selections
    newSelected[index] = true; // Set selected state on pressed button
    setSelected(newSelected);
    if (index !== 2) {
      setShowOption4(false);
      setOption4Value("");
      setOption4Selected(false);
    } else {
      setShowOption4(true); // Show Option 4 input when Option 3 is clicked
    }
  };

  const onNext = async () => {
    if (selected.includes(true) || option4Value !== "") {
      navigation.navigate("Pronounce");
    } else {
      alert("Please select an option before proceeding");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>I am a</Text>
      <View style={styles.spaceSmall} />
      {["Woman", "Man", "Others"].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, selected[index] ? styles.selected : null]}
          onPress={() => handlePress(index)}
        >
          <Text style={styles.text}>{option}</Text>
          {index === 2 && <Text style={styles.arrow}>{' >'}</Text>}
        </TouchableOpacity>
      ))}
      {showOption4 &&
        <TextInput
          style={[styles.option4, styles.input]}
          onChangeText={text => setOption4Value(text)}
          value={option4Value}
          placeholder="Type here"
          placeholderTextColor='gray'
          textAlign='center'
        />
      }
      <View style={styles.space} />
      <TouchableOpacity onPress={onNext}
        style={[styles.button, styles.nextButton]}
      >
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30, // Increased the font size
    marginBottom: 20,
    left: 10,
    right: 10,
  },
  option4: {
    width: Dimensions.get('window').width * 5 / 6, // Increased the width
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1, // add border
    borderColor: 'black', // set border color
  },
  button: {
    width: Dimensions.get('window').width * 5 / 6, // Increased the width
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: 'orange',
  },
  nextButton: {
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  arrow: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    right: 10,
  },
  input: {
    fontSize: 20,
    color: 'black',
  },
  space: {
    height: 120, // This creates space for 2 option buttons
  },
  spaceSmall: {
    height: 20, // This creates a small gap between the heading and the options
  },
});



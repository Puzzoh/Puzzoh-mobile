import React from "react";
import { TouchableOpacity, Text, Dimensions } from "react-native";

const CustomButton = ({ onPress, bgButton, text, textStyle }) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        width: windowWidth - 60,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: bgButton,
        borderRadius: 10,
        borderWidth: 0,
        shadowColor: "#030002", // Android, iOS & Web
        shadowOpacity: 0.25, // iOS & Web
        shadowRadius: 5,
      }}
      onPress={onPress}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

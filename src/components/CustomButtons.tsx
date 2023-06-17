import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/index";

const windowWidth = Dimensions.get("window").width;

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        alignSelf: "flex-end",
        right: 330,
        zIndex: 1,
        top: 5,
        borderRadius: 20,
        padding: 10,
        borderColor: "lightgray",
        borderWidth: 0,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.primary,
          fontSize: 20,
        }}
      >
        &lt;
      </Text>
    </TouchableOpacity>
  );
};

export const NextButton = () => {};

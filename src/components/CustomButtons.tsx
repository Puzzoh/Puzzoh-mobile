import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/index";

const windowWidth = Dimensions.get("window").width;

export const BackButton = ({ pressed, onPressIn, onPressOut, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        alignSelf: "flex-end",
        right: 330,
        zIndex: 1,
        top: 0,
        borderRadius: 20,
        padding: 10,
        borderColor: "transparent",
        borderWidth: 1,
        backgroundColor: pressed ? "white" : "transparent",
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    >
      <Text style={{ color: colors.primary, fontSize: 20, fontWeight: "bold" }}>
        &lt;
      </Text>
    </TouchableOpacity>
  );
};

export const NextButton = () => {};

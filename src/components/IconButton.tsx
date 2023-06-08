import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles, { colors } from "../styles/index";

const IconButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          color: colors.primary,
          fontSize: 36,
          fontFamily: "Poppins",
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default IconButton;

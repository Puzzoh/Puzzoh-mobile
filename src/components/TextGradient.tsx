import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TextGradient = ({ colors, style, children }) => {
  return (
    <View style={styles.gradientContainer}>
      <LinearGradient colors={colors} style={styles.gradient}>
        <Text style={[style, styles.text]}>{children}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientContainer: {
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default TextGradient;

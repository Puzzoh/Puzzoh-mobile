import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { colors } from "../styles/index";
import users from "../../assets/data/users";

const VoucherMatches = () => {
  return <SafeAreaView style={styles.root}></SafeAreaView>;
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
  },
  container: {
    padding: 5,
  },
  users: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: colors.primary,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
});

export default VoucherMatches;

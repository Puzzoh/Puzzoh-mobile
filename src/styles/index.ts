import { StyleSheet, Platform, Dimensions } from "react-native";
import * as Font from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const colors = {
  primary: "#FF914D",
  secondary: "",
  input: "#F5F5F5",
  btnShadow: "#030002",
};

export const sizes = {
  windowWidth,
  windowHeight,
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 40,
    lineHeight: 50,
    fontFamily: "Lexend",
  },
  heading2: {
    fontSize: 32,
    fontFamily: "Lexend",
  },
  heading3: {
    fontSize: 24,
    fontFamily: "Lexend",
  },
  heading4: {
    fontSize: 20,
    fontFamily: "Lexend",
  },
  heading5: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
  bodyText1: {
    fontSize: 16,
    fontFamily: "Poppins",
  },
  bodyText2: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
  bodyText3: {
    fontSize: 12,
    fontFamily: "Poppins",
  },

  italicText1: {
    fontSize: 16,
    fontFamily: "Poppins_Italic",
  },
  optionText: {
    fontSize: 12,
    fontFamily: "Poppins_SemiBold",
  },
  selected: {
    backgroundColor: colors.primary,
  },
  highlightText: {
    fontSize: 16,
    fontFamily: "Poppins_SemiBold",
    color: colors.primary,
  },
  chosenText: {
    color: "#fff",
    fontFamily: "Poppins_SemiBold",
    fontSize: 16,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  users: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: colors.primary,
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: colors.btnShadow, // Android, iOS & Web
    shadowOpacity: 0.25, // iOS & Web
    shadowRadius: 5,
  },

  blankButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "lightgray",
    borderWidth: 0.2,
    padding: 10,
  },

  input: {
    borderWidth: 1,
    padding: 20,
    backgroundColor: colors.input,
    borderRadius: 5,
    borderColor: "#fff",
  },

  spanButton: {
    marginTop: 10,
    width: windowWidth - 60,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: colors.btnShadow, // Android, iOS & Web
    shadowOpacity: 0.25, // iOS & Web
    shadowRadius: 5,
  },

  continueButton: {
    position: "absolute", // set position to absolute
    bottom: 20, // set bottom property to 20
    marginTop: 10,
    width: windowWidth - 60,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderWidth: 0,
    shadowColor: colors.btnShadow, // Android, iOS & Web
    shadowOpacity: 0.25, // iOS & Web
    shadowRadius: 5,
  },
});

export default styles;

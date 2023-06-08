import { StyleSheet, Platform, Dimensions } from "react-native";

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

  bodyText: {
    fontSize: 16,
    fontFamily: "Poppins",
  },

  bgText: {
    fontSize: 16,
    fontFamily: "Poppins",
    color: "gray",
  },

  highlightText: {
    fontSize: 16,
    fontFamily: "Poppins_semibold",
    color: colors.primary,
  },

  chosenText: {
    color: "#fff",
    fontFamily: "Poppins_semibold",
    fontSize: 16,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
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

  inner: {
    flex: 1,
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

  img: {
    position: "absolute",
    width: 500,
    height: 480,
    top: -100,
  },
});

export default styles;

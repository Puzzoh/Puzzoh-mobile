import * as React from "react";
import { Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles, { sizes, colors } from "../styles/index";

const OnboardingSlider = (props) => {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              padding: 15,
              paddingTop: 40,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: sizes.windowWidth - 50,
                height: 400,
              }}
              resizeMode="contain"
            />
            <Text style={[styles.heading2, { color: colors.primary }]}>
              {item.title}
            </Text>
            <Text style={[styles.bodyText, { paddingTop: 30 }]}>
              {item.description}
            </Text>
          </View>
        );
      }}
      activeDotStyle={{
        backgroundColor: colors.primary,
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      {...props}
    />
  );
};
const slides = [
  {
    id: 1,
    title: "Match on your favorite food",
    description:
      "Don't know what to eat for dinner? Find someone to share a meal with you.",
    image: require("../../assets/imgs/Bg8.jpeg"),
  },
  {
    id: 2,
    title: "Match on your favorite activity",
    description:
      "Find a partner for your favorite activity or try something new with like-minded match(es).",
    image: require("../../assets/imgs/Bg9.jpeg"),
  },
  {
    id: 3,
    title: "Algorithm & Matching",
    description:
      "We match you with people that have a large array of similar interests and choose the same voucher.",
    image: require("../../assets/imgs/Bg2.jpeg"),
  },
  {
    id: 4,
    title: "Expand your social circle",
    description: "Meeting more than one like-minded matches at the same time.",
    image: require("../../assets/imgs/Bg6.jpeg"),
  },
  {
    id: 5,
    title: "Flexible voucher with discounts",
    description:
      "Secure a voucher with your match today to unlock unlimited discounts. Redeem anytime before it expires.",
    image: require("../../assets/imgs/Bg12.png"),
  },
];

const buttonLabel = (label) => {
  return (
    <View style={{ padding: 12 }}>
      <Text style={styles.highlightText}>{label}</Text>
    </View>
  );
};

export default OnboardingSlider;

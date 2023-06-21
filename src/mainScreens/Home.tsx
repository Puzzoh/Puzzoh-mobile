import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import VoucherStack from "../components/AnimatedStack";
import VoucherCard from "../components/VoucherCard";
import vouchers from "../../assets/data/vouchers";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { colors } from "../styles/index";
import CustomHeaderBar from "../components/CustomHeaderBar";

export default function VoucherScreen() {
  const onSwipeLeft = (user) => {
    console.warn("swipe left");
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right");
  };

  return (
    <View style={nStyles.container}>
      <CustomHeaderBar />
      <VoucherStack
        data={vouchers}
        renderItem={({ item }) => <VoucherCard voucher={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={nStyles.buttonRow}>
        <TouchableOpacity
          style={[nStyles.button, { backgroundColor: colors.primary }]}
        >
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            nStyles.button,
            {
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 0.25,
            },
          ]}
        >
          <Icon name="star" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            nStyles.button,
            {
              backgroundColor: "white",
              borderColor: "gray",
              borderWidth: 0.25,
            },
          ]}
        >
          <Icon name="download" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[nStyles.button, { backgroundColor: colors.primary }]}
        >
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const nStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 50,
    marginTop: 0,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 12,
  },
});

import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import VoucherStack from "../components/AnimatedStack";
import VoucherCard from "../components/VoucherCard";
import vouchers from "../../assets/data/vouchers";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../styles/index";
import CustomHeaderBar from "../components/CustomHeaderBar";

export default function VoucherScreen() {
  const onSwipeLeft = (user) => {
    console.warn("swipe left");
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right");
  };

  return (
    <View style={styles.container}>
      <CustomHeaderBar />
      <VoucherStack
        data={vouchers}
        renderItem={({ item }) => <VoucherCard voucher={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="star" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="download" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    // flexDirection: "column",
    // gap: 20,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 12,
  },
});

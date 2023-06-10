import { View, Text, StyleSheet } from "react-native";
import VoucherStack from "../components/AnimatedStack";
import VoucherCard from "../components/VoucherCard";
import vouchers from "../../assets/data/vouchers";

export default function VoucherScreen() {
  const onSwipeLeft = (user) => {
    console.warn("swipe left");
  };

  const onSwipeRight = (user) => {
    console.warn("swipe right");
  };

  return (
    <View style={styles.container}>
      <VoucherStack
        data={vouchers}
        renderItem={({ item }) => <VoucherCard voucher={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
});

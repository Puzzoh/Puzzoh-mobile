import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import VoucherStack from "../components/VoucherStack";
import VoucherCard from "../components/VoucherCard";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { colors } from "../styles/index";
import CustomHeaderBar from "../components/CustomHeaderBar";
import { gql, useQuery, useMutation } from "@apollo/client";
import { listVouchers } from "../graphql/queries";

const GET_VOUCHERS = gql(listVouchers);

export default function VoucherScreen() {
  const { loading, error, data } = useQuery(GET_VOUCHERS);

  const vouchers = data?.listVouchers.items;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={nStyles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  const onSwipeLeft = (user) => {
    console.log("swipe left");
  };

  const onSwipeRight = (user) => {
    console.log("swipe right");
  };

  return (
    <View style={nStyles.container}>
      <CustomHeaderBar />
      <VoucherStack
        data={JSON.parse(JSON.stringify(vouchers))} // https://github.com/dohooo/react-native-reanimated-carousel/issues/66
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

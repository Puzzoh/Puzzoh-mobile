import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { colors } from "../styles/index";
import VoucherMatchesPopup from "../components/VoucherMatchesPopup";
import { gql, useQuery, useMutation } from "@apollo/client";
import { listVouchers } from "../graphql/queries";

const GET_VOUCHER_MATCHES = gql(listVouchers);

const VoucherMatches = () => {
  const { data } = useQuery(GET_VOUCHER_MATCHES);
  const vouchers = data?.listVouchers.items;
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const handleVoucherPress = (voucher) => {
    setSelectedVoucher(voucher);
  };

  const handleClosePopup = () => {
    setSelectedVoucher(null);
  };

  const renderItem = ({ item, index }) => {
    const isRecommended = index < 3;

    return (
      <TouchableOpacity onPress={() => handleVoucherPress(item)}>
        <View style={nStyles.voucher}>
          <View style={nStyles.textContainer}>
            {isRecommended && (
              <Text style={nStyles.recommended}>Recommended</Text>
            )}
            <Text style={nStyles.title}>{item.title}</Text>
            <Text style={nStyles.info}>Rating: {item.avgRating}</Text>
          </View>
          <Image style={nStyles.image} source={{ uri: item.imageURL }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={nStyles.root}>
      <View style={nStyles.container}>
        <Text style={nStyles.screenTitle}>Recent Voucher Matches</Text>
        <FlatList
          data={vouchers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      {selectedVoucher && (
        <VoucherMatchesPopup
          voucher={selectedVoucher}
          onClose={handleClosePopup}
        />
      )}
    </SafeAreaView>
  );
};

const { height } = Dimensions.get("window");

const nStyles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 5,
    marginTop: 20,
  },
  screenTitle: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.primary,
    marginBottom: 10,
  },
  voucher: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    height: height / 3,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
  },
  recommended: {
    fontSize: 12,
    color: colors.primary,
    marginBottom: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: "#666",
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default VoucherMatches;

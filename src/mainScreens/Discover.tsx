import React, { useEffect, useState, useContext } from "react";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles, { colors } from "../styles/index";
import CustomHeaderBar from "../components/CustomHeaderBar";
import { gql, useQuery, useMutation } from "@apollo/client";
import { listVouchers } from "../graphql/queries";
import VoucherDetailPopup from "../components/VoucherDetailPopup";
import UserContext from "../context/UserContext";

const GET_VOUCHERS = gql(listVouchers);

const Home = () => {
  const user = useContext(UserContext);

  const { loading, error, data, refetch } = useQuery(GET_VOUCHERS);
  const vouchers = data?.listVouchers.items;
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarButtonActive, setIsStarButtonActive] = useState(false);
  const [isStrikeButtonActive, setIsStrikeButtonActive] = useState(false);

  const handleVoucherPress = (voucher) => {
    setSelectedVoucher(voucher);
  };

  const handleClosePopup = () => {
    setSelectedVoucher(null);
  };

  const toggleStrikeButton = () => {
    setIsStrikeButtonActive(!isStrikeButtonActive);
  };

  const toggleStarButton = () => {
    setIsStarButtonActive(!isStarButtonActive);
  };

  const handleReload = () => {
    refetch();
  };

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

  const onSwipeLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onSwipeRight = () => {
    if (currentIndex < vouchers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={nStyles.container}>
      <CustomHeaderBar />
      <VoucherStack
        data={JSON.parse(JSON.stringify(vouchers))} // https://github.com/dohooo/react-native-reanimated-carousel/issues/66
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleVoucherPress(item)}>
            <VoucherCard voucher={item} key={item.id} />
          </TouchableOpacity>
        )}
        currentIndex={currentIndex}
      />
      <View style={nStyles.buttonRow}>
        <TouchableOpacity
          style={[nStyles.button, { backgroundColor: colors.primary }]}
          onPress={onSwipeLeft}
        >
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            nStyles.button,
            {
              backgroundColor: isStarButtonActive ? colors.primary : "white",
              borderColor: "gray",
              borderWidth: 0.25,
            },
          ]}
          onPress={toggleStarButton}
        >
          <Icon
            name="star"
            size={20}
            color={isStarButtonActive ? "white" : colors.primary}
          />
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
          onPress={handleReload}
        >
          <Icon name="refresh" size={20} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            nStyles.button,
            {
              backgroundColor: isStrikeButtonActive ? colors.primary : "white",
              borderColor: "gray",
              borderWidth: 0.25,
            },
          ]}
          onPress={toggleStrikeButton}
        >
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={20}
            color={isStrikeButtonActive ? "white" : colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[nStyles.button, { backgroundColor: colors.primary }]}
          onPress={onSwipeRight}
        >
          <Icon name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {selectedVoucher && (
        <VoucherDetailPopup
          voucher={selectedVoucher}
          onClose={handleClosePopup}
        />
      )}
    </View>
  );
};

const nStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    zIndex: 0,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 0,
    marginBottom: 10,
    zIndex: 1,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 12,
  },
});

export default Home;

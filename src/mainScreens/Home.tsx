import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import VoucherStack from "../components/AnimatedStack";
import VoucherCard from "../components/VoucherCard";
import vouchers from "../../assets/data/vouchers";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { colors } from "../styles/index";
import CustomHeaderBar from "../components/CustomHeaderBar";
import { gql, useQuery, useMutation } from "@apollo/client";

const GET_VOUCHERS_INFO = gql`
  query listVouchers {
    listVouchers {
      items {
        createdAt
        description
        forQuantity
        id
        numRedeemed
        priceAfter
        priceBefore
        rating
        title
      }
    }
  }
`;

export default function VoucherScreen() {
  const { data, loading, error } = useQuery(GET_VOUCHERS_INFO);

  console.log(data);

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

  // useEffect(() => {
  //   async function getVoucherData() {
  //       await fetch(config.aws_appsync_graphqlEndpoint)
  //       .then((response) => {
  //         // Handle successful response
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         // Handle error
  //         console.log(error);
  //       });
  //   }
  //   getVoucherData();
  // }, []);

  // const ADD_VOUCHER = gql`
  //   mutation MyMutation {
  //     createVoucher(
  //       input: {
  //         numRedeemed: 10
  //         priceBefore: 40
  //         priceAfter: 35
  //         forQuantity: 10
  //         rating: 44
  //         title: "Dining for 2"
  //         description: "There's nothing better"
  //       }
  //     ) {
  //       id
  //     }
  //   }
  // `;

  // const [addVoucher] = useMutation(ADD_VOUCHER);

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

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { colors } from "../styles/index";
const VoucherCard = (props) => {
  const {
    id,
    title,
    avgRating,
    numRedeemed,
    forQuantity,
    priceAfter,
    priceBefore,
    imageURL,
  } = props.voucher;

  const stars = [];
  for (let i = 0; i < avgRating; i++) {
    stars.push(<Icon key={i} name="star" size={20} color="gold" />);
  }

  return (
    <View style={nStyles.card} key={id}>
      <Image source={{ uri: imageURL }} style={nStyles.image} />
      <View style={nStyles.cardInner}>
        <Text style={styles.heading3}>{title}</Text>
        <View style={[nStyles.row]}>
          <Text style={styles.bodyText}>{numRedeemed} Redeemed </Text>
        </View>
        <View style={[nStyles.row]}>
          <Text style={styles.bodyText}>{forQuantity}+ people</Text>
        </View>
        <View style={nStyles.row}>
          <Text
            style={[
              styles.heading3,
              {
                marginBottom: 12,
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
              },
            ]}
          >
            ${priceBefore}
          </Text>
          <Text
            style={[
              styles.heading3,
              { color: colors.primary, marginBottom: 12, marginLeft: 10 },
            ]}
          >
            ${priceAfter}
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.heading4}>
            Popular Review:{" "}
            <Text style={[styles.italicText, { color: "gray" }]}>
              &apos;Good food with nice service.&apos; - Abcxyz
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const nStyles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#fefefe",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    top: 40,
    borderWidth: 1,
    borderColor: colors.primary
  },
  image: {
    width: "100%",
    alignItems: "center",
    height: 150,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardInner: {
    padding: 15,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",

  },
  oldPrice: {
    fontSize: 15,
    fontWeight: "bold",
  },
  newPrice: {
    fontSize: 15,
    fontWeight: "bold",

  },
  featuredDishContainer: {
    flexDirection: "row",

    borderTopWidth: 1,
    borderColor: "#dddddd",
    paddingTop: 12,
  },
  featuredDishTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  featuredDish: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    borderColor: "#ccc",
  },
});

export default VoucherCard;

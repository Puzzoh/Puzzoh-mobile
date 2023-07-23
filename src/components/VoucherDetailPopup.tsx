import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import styles, { colors } from "../styles/index";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const VoucherDetailPopup = (props) => {
  const navigation = useNavigation();
  const {
    id,
    title,
    avgRating,
    numRedeemed,
    forQuantity,
    priceAfter,
    priceBefore,
    imageURL,
    location,
  } = props.voucher;

  const { onClose } = props;

  const stars = [];
  const totalStars = 5;
  const yellowStar = <Icon name="star" size={20} color="gold" />;
  const grayStar = <Icon name="star" size={20} color="gray" />;

  for (let i = 0; i < totalStars; i++) {
    if (i < avgRating) {
      stars.push(yellowStar);
    } else {
      stars.push(grayStar);
    }
  }

  const handleButtonPress = (buttonName) => {
    switch (buttonName) {
      case "Review":
        navigation.navigate("Review");
        break;
      case "Contact":
        break;
      case "Menu":
        break;
      case "Website":
        break;
      default:
        break;
    }
  };

  return (
    <Modal isVisible={true} onBackdropPress={onClose}>
      <ScrollView style={nStyles.card} key={id}>
        <Image source={{ uri: imageURL }} style={nStyles.image} />
        <TouchableOpacity style={nStyles.backButton} onPress={onClose}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={nStyles.cardInner}>
          <Text style={styles.heading3}>{title}</Text>
          <Text
            style={[styles.heading5, { color: "#888888", marginBottom: 16 }]}
          >
            {location}
          </Text>
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
                { color: "#34A853", marginBottom: 12, marginLeft: 10 },
              ]}
            >
              ${priceAfter}
            </Text>
          </View>
          <Text style={styles.heading3}>What to expect</Text>
          <Text style={styles.heading3}>Terms</Text>
          <Text style={styles.heading3}>About the venue</Text>

          <View style={nStyles.featuredDishContainer}>
            {["Review", "Contact", "Menu", "Website"].map((dish, index) => (
              <TouchableOpacity
                key={index}
                style={nStyles.featuredDish}
                onPress={() => handleButtonPress(dish)}
              >
                <Text
                  style={[
                    styles.heading4,
                    { textAlign: "center", color: colors.primary },
                  ]}
                >
                  {dish}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={[styles.heading3, { marginTop: 20 }]}>
            Reviews (NumReviews)
          </Text>
          <View style={[nStyles.row, { gap: 10 }]}>
            <Text style={styles.heading5}> {avgRating} </Text>
            <View style={{ flexDirection: "row" }}>{stars}</View>
          </View>
        </View>
      </ScrollView>
    </Modal>
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
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  cardInner: {
    padding: 10,
  },
  voucherName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    fontSize: 20,
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 20,
    fontWeight: "bold",
  },
  newPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  featuredDishContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
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
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: 8,
  },
});

export default VoucherDetailPopup;

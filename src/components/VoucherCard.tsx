import { View, Text, Image, StyleSheet } from "react-native";

const VoucherCard = (props) => {
  const { name, image, rating, redeemed, people, location, priceB, priceA } =
    props.voucher;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.cardInner}>
        <Text style={styles.voucherName}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.rating}>{rating}⭐</Text>
          <Text style={styles.details}>{redeemed} Redeemed </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.details}> 0.5 miles </Text>
          <Text style={styles.details}>For {people} people</Text>
        </View>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.row}>
          <Text style={styles.oldPrice}>${priceB} </Text>
          <Text style={styles.newPrice}>${priceA} </Text>
        </View>
        <View style={styles.featuredDishContainer}>
          <Text style={styles.featuredDish}>Dish 1, Dish 2, Dish 3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

    elevation: 11,
  },
  image: {
    width: "100%",
    height: 150,
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
  details: {
    fontSize: 18,
  },
  location: {
    fontSize: 18,
    color: "#888888",
    marginBottom: 8,
  },
  oldPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  newPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  featuredDishContainer: {
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
    fontSize: 16,
    fontStyle: "italic",
    color: "#888888",
  },
});

export default VoucherCard;

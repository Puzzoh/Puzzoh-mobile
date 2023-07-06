import React from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../styles/index";

const VoucherMatchesPopup = ({ voucher, onClose }) => {
  return (
    <Modal isVisible={true} onBackdropPress={onClose}>
      <View style={styles.content}>
        <Text style={styles.title}>{voucher.title}</Text>
        <Image style={styles.image} source={{ uri: voucher.imageURL }} />
        <Text style={styles.info}>Rating: {voucher.avgRating}</Text>
        <Text style={styles.info}>Redeemed: {voucher.numRedeemed}</Text>
        <Text style={styles.info}>People: {voucher.forQuantity}</Text>
        <Text style={styles.info}>Location: {voucher.location}</Text>
        <Text style={styles.price}>
          Price: ${voucher.priceAfter} (${voucher.priceBefore} Before)
        </Text>
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default VoucherMatchesPopup;

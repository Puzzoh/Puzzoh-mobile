import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { colors } from "../styles/index";
import vouchers from "../../assets/data/vouchers";
import VoucherDetailPopup from "../components/VoucherDetailPopup";

const { height } = Dimensions.get('window');

const VoucherMatches = () => {
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
        <View style={styles.voucher}>
          <View style={styles.textContainer}>
            {isRecommended && <Text style={styles.recommended}>Recommended</Text>}
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>Rating: {item.rating}</Text>
            <Text style={styles.info}>People: {item.people}</Text>
          </View>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Recent Voucher Matches</Text>
        <FlatList
          data={vouchers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      {selectedVoucher && <VoucherDetailPopup voucher={selectedVoucher} onClose={handleClosePopup} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    padding: 5,
  },
  title: {
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
    borderBottomColor: '#E8E8E8',
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
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default VoucherMatches;

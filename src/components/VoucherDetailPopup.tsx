import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Modal from 'react-native-modal';

const VoucherDetailPopup = ({ voucher, onClose }) => {
    return (
        <Modal isVisible={true} onBackdropPress={onClose}>
            <View style={styles.content}>
                <Text style={styles.title}>{voucher.name}</Text>
                <Image style={styles.image} source={{ uri: voucher.image }} />
                <Text style={styles.info}>Rating: {voucher.rating}</Text>
                <Text style={styles.info}>Redeemed: {voucher.redeemed}</Text>
                <Text style={styles.info}>People: {voucher.people}</Text>
                <Text style={styles.info}>Location: {voucher.location}</Text>
                <Text style={styles.price}>Price: ${voucher.priceA} (${voucher.priceB} Before)</Text>
                <Button title="Close" onPress={onClose} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
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
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default VoucherDetailPopup;

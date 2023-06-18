import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Modal } from "react-native";
import styles, { colors } from "../styles/index";

function OtherGender({ onDone }) {
    const [selected, setSelected] = useState([false, false, false, false, false]);

    const handlePress = (index) => {
        const newSelected = [false, false, false, false, false];
        newSelected[index] = true;
        setSelected(newSelected);
    };

    return (
        <Modal animationType="slide" transparent={true} visible={true} onRequestClose={onDone}>
            <View style={nStyles.modalContainer}>
                <View style={nStyles.contentContainer}>
                    <ScrollView contentContainerStyle={nStyles.container}>
                        {["L", "G", "B", "T", "S"].map((option, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[nStyles.button, selected[index] ? styles.selected : null]}
                                onPress={() => handlePress(index)}
                            >
                                <Text style={[styles.optionText, selected[index] ? styles.whitetext : null]}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={nStyles.buttonContainer}>
                        <TouchableOpacity style={nStyles.backButton} onPress={onDone}>
                            <Text style={styles.chosenText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const nStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    },
    contentContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        paddingBottom: 80, // Adjust the bottom padding to make space for the buttons
    },
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
    },
    backButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
    },
    button: {
        width: (Dimensions.get("window").width * 5) / 6,
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 0.25,
    },
});

export default OtherGender;

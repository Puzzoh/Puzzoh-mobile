import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from "@react-navigation/native";

const Interest = () => {
    const [selected, setSelected] = useState(Array(12).fill(false)); // An array of 12 booleans for the 12 options
    const foodPref = [
        "Vegan",
        "Mediterranean",
        "Italian",
        "Chinese",
        "Japanese",
        "Mexican",
        "Pizza/Burgers",
        "Thai",
        "Indian",
        "Greek",
        "Spanish",
        "Korean",
        "Vietnamese",
        "Dessert/cafe",
    ];
    type RootStackParamList = {
        Birthday: undefined;
    };
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePress = index => {
        let newSelected = [...selected];
        let count = newSelected.reduce((n, x) => n + (x === true), 0);

        if (count < 3 || newSelected[index] === true) {
            newSelected[index] = !newSelected[index]; // Toggle selected state on pressed button
        }

        setSelected(newSelected);
    };

    const onNext = () => {
        //navigation.navigate("Birthday");
    };

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.skipWrapper}>
                    <TouchableOpacity
                        style={styles.skipButton}
                    //onPress={() => navigation.navigate("Birthday")}
                    >
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading}>Food Preferences</Text>
                <Text style={styles.subHeading}>Select up to 3 of your favorite cuisines and let us know what you like</Text>
                <View style={styles.spaceSmall} />
                {Array.from({ length: Math.ceil(foodPref.length / 2) }, (_, i) => i * 2).map(rowStartIndex => (
                    <View style={styles.row} key={rowStartIndex}>
                        {foodPref.slice(rowStartIndex, rowStartIndex + 2).map((interest, idx) => {
                            const interestIndex = rowStartIndex + idx;
                            return (
                                <TouchableOpacity
                                    key={interestIndex}
                                    style={[
                                        styles.button,
                                        selected[interestIndex] ? styles.selected : null,
                                        styles.interest, // new style for interests
                                    ]}
                                    onPress={() => handlePress(interestIndex)}
                                    disabled={selected.filter(Boolean).length === 3 && !selected[interestIndex]}
                                >
                                    <Text style={styles.text}>{interest}</Text>
                                    {/* replace this text with your icon */}
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                ))}
                <View style={styles.space} />
                <TouchableOpacity onPress={onNext} style={[styles.button, styles.nextButton, styles.largeButton]}>
                    <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 30,
        marginBottom: 20,
        top: 50,
        bottom: 10,

    },
    subHeading: {
        top: 35,
        fontSize: 13,
        flexWrap: 'wrap',
        marginLeft: 15,
        marginRight: 15,
    },
    skipWrapper: {
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 10,
    },
    skipButton: {
        position: 'absolute',
        top: 30, // increase this value to move the button further down
        right: 10,
        fontSize: 15,
        color: 'gray',
    },
    skipText: {
        color: 'gray',
        fontSize: 15,
    },
    row: {
        top: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%',
        marginBottom: 10,
    },
    button: {
        width: Dimensions.get('window').width / 4.5,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
    selected: {
        backgroundColor: 'orange',
    },
    nextButton: {
        backgroundColor: 'orange',
    },
    largeButton: {
        width: Dimensions.get('window').width * 5 / 6,
        height: 60,
    },
    text: {
        fontSize: 12,
    },
    interest: {
        flex: 1,
        margin: 5,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    space: {
        height: 35,
    },
    spaceSmall: {
        height: 20,
    },
});


export default Interest;

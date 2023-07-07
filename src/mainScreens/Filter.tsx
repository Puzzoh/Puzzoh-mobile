import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles, { colors } from "../styles/index";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CheckBox from 'react-native-check-box';

const EditFilter = ({ navigation, route }) => {
    const [ageRange, setAgeRange] = useState([18, 65]);
    const [distanceRange, setDistanceRange] = useState([0, 100]);
    const [AgeswitchValue, setAgeSwitchValue] = useState(false);
    const [PrefswitchValue, setPrefSwitchValue] = useState(false);
    const [DistanceswitchValue, setDistanceSwitchValue] = useState(false);
    const [useBox1, setUseBox1] = useState(false);
    const [useBox2, setUseBox2] = useState(false);
    const [useBox3, setUseBox3] = useState(false);

    const handleAgeRangeChange = (newValues) => {
        setAgeRange(newValues);
    };

    const handleDistanceRangeChange = (newValues) => {
        setDistanceRange(newValues);
    };

    const handleSave = async () => {
        navigation.navigate("Main");
    };

    const handleAgeSwitchChange = () => {
        setAgeSwitchValue(!AgeswitchValue);
    };

    const handleDistanceSwitchChange = () => {
        setDistanceSwitchValue(!DistanceswitchValue);
    };

    const handlePrefSwitchChange = () => {
        setPrefSwitchValue(!PrefswitchValue);
    };

    const handleCheckbox1Change = () => {
        setUseBox1(!useBox1);
    };

    const handleCheckbox2Change = () => {
        setUseBox2(!useBox2);
    };

    const handleCheckbox3Change = () => {
        setUseBox3(!useBox3);
    };

    return (
        <View style={nStyles.container}>
            <TouchableOpacity
                style={nStyles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
            <View style={nStyles.contentContainer}>
                <ScrollView>
                    <View style={nStyles.inputContainer}>
                        <Text style={styles.heading5}>Who you want to use the coupon with</Text>
                        <View style={nStyles.switchContainer}>
                            <Text style={styles.bodyText3}>I'm open to every gender</Text>
                            <Switch
                                value={PrefswitchValue}
                                onValueChange={handlePrefSwitchChange}
                                ios_backgroundColor={colors.primary}
                                thumbColor={colors.primary}
                            />
                        </View>
                        <View style={nStyles.checkboxContainer}>
                            <CheckBox
                                isChecked={useBox1}
                                onClick={handleCheckbox1Change}
                                checkBoxColor={colors.primary}
                            />
                            <Text style={styles.bodyText3}>Man</Text>
                        </View>
                        <View style={nStyles.checkboxContainer}>
                            <CheckBox
                                isChecked={useBox2}
                                onClick={handleCheckbox2Change}
                                checkBoxColor={colors.primary}
                            />
                            <Text style={styles.bodyText3}>Woman</Text>
                        </View>
                        <View style={nStyles.checkboxContainer}>
                            <CheckBox
                                isChecked={useBox3}
                                onClick={handleCheckbox3Change}
                                checkBoxColor={colors.primary}
                            />

                            <Text style={styles.bodyText3}>Others</Text>
                        </View>
                    </View>

                    <View style={nStyles.inputContainer}>
                        <Text style={styles.heading5}>AGE RANGE</Text>
                        <View style={nStyles.sliderContainer}>
                            <Text style={styles.heading5}>{ageRange[0]}</Text>
                            <Text style={styles.heading5}>{ageRange[1]}</Text>
                        </View>
                        <View style={nStyles.sliderWrapper}>
                            <MultiSlider
                                values={ageRange}
                                sliderLength={280}
                                onValuesChange={handleAgeRangeChange}
                                min={18}
                                max={65}
                                step={1}
                                allowOverlap={false}
                                snapped
                            />
                        </View>
                        <View style={nStyles.switchContainer}>
                            <Text style={styles.bodyText3}>See more available options</Text>
                            <Switch
                                value={AgeswitchValue}
                                onValueChange={handleAgeSwitchChange}
                                ios_backgroundColor={colors.primary}
                                thumbColor={colors.primary}
                            />
                        </View>
                    </View>

                    <View style={nStyles.inputContainer}>
                        <Text style={styles.heading5}>DISTANCE RANGE</Text>
                        <View style={nStyles.sliderContainer}>
                            <Text style={styles.heading5}>{distanceRange[0]}</Text>
                            <Text style={styles.heading5}>{distanceRange[1]}</Text>
                        </View>
                        <View style={nStyles.sliderWrapper}>
                            <MultiSlider
                                values={distanceRange}
                                sliderLength={280}
                                onValuesChange={handleDistanceRangeChange}
                                min={0}
                                max={100}
                                step={1}
                                allowOverlap={false}
                                snapped
                            />
                        </View>
                        <View style={nStyles.switchContainer}>
                            <Text style={styles.bodyText3}>See more available options</Text>
                            <Switch
                                value={DistanceswitchValue}
                                onValueChange={handleDistanceSwitchChange}
                                ios_backgroundColor={colors.primary}
                                thumbColor={colors.primary}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={nStyles.button} onPress={handleSave}>
                        <Text style={[styles.heading5, { color: "white" }]}>Save</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

const screenWidth = Dimensions.get("window").width;

const nStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: "#fff",
    },
    sliderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    contentContainer: {
        flex: 1,
        top: 40,
    },
    sliderWrapper: {
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 16,
        zIndex: 10,
    },
    inputContainer: {
        marginBottom: 24,
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    button: {
        backgroundColor: colors.primary,
        height: 44,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

});

export default EditFilter;

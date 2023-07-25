import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import styles, { colors } from "../styles/index";
import { useNavigation } from "@react-navigation/native";

const Review = () => {
    const navigation = useNavigation();
    const [reviewText, setReviewText] = useState('');
    const [starCount, setStarCount] = useState(0);

    const handleSubmitReview = () => {
        // Implement logic to submit the review and star rating
        navigation.navigate("Home")
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={styles.heading2}>Review</Text>


            <View style={{ marginVertical: 20 }}>
                <Text style={styles.bodyText1}>Please leave your review about ...</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 10 }}
                    multiline
                    placeholder="Write your review here"
                    value={reviewText}
                    onChangeText={text => setReviewText(text)}
                />
            </View>


            <View style={{ marginVertical: 20 }}>
                <Text style={styles.bodyText1}>How many stars would you rate your experience?</Text>
                <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={starCount}
                    selectedStar={rating => setStarCount(rating)}
                    fullStarColor={colors.primary}
                />
            </View>


            <TouchableOpacity
                style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 5 }}
                onPress={handleSubmitReview}
            >
                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Submit Review</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Review;

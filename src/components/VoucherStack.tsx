import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import Like from "../../assets/imgs/thumbs-up.png";
import Dislike from "../../assets/imgs/thumbs-down.png";

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const VoucherStack = (props) => {
  const { data, renderItem, currentIndex } = props;

  const [nextIndex, setNextIndex] = useState(currentIndex + 1);
  const currentOne = data[currentIndex];
  const nextOne = data[nextIndex];

  const { width: screenWidth } = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      "deg"
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1]
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1]
    ),
  }));

  const likeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, hiddenTranslateX / 5], [0, 1]),
  }));

  const dislikeStyle = useAnimatedStyle(() => ({
    opacity: interpolate(translateX.value, [0, -hiddenTranslateX / 5], [0, 1]),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context: { startX: number }) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
        return;
      }

      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => setNextIndex(currentIndex + 1)
      );
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1);
  }, [currentIndex, translateX]);

  return (
    <View style={nStyles.root}>
      {nextOne && (
        <View style={nStyles.nextCardContainer}>
          <Animated.View style={[nStyles.animatedCard, nextCardStyle]}>
            {renderItem({ item: nextOne })}
          </Animated.View>
        </View>
      )}

      {currentOne && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[nStyles.animatedCard, cardStyle]}>
            <Animated.Image
              source={Like}
              style={[nStyles.like, { left: 10 }, likeStyle]}
              resizeMode="contain"
            />
            <Animated.Image
              source={Dislike}
              style={[nStyles.like, { right: 10 }, dislikeStyle]}
              resizeMode="contain"
            />
            {renderItem({ item: currentOne })}
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};

const nStyles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    marginTop: 40,
  },
  animatedCard: {
    width: "90%",
    height: "90%",
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  like: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 10,
    zIndex: 1,
  },
});

export default VoucherStack;

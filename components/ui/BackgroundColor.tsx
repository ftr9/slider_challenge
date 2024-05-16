import Animated, {
  useAnimatedStyle,
  SharedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import { SCREEN_WIDTH } from '../../constants';
import { StyleSheet } from 'react-native';

const BackgroundColor = ({
  bgColor,
  scrollOffsetSharedValue,
  index,
}: {
  bgColor: string;
  scrollOffsetSharedValue: SharedValue<number>;
  index: number;
}) => {
  const animatedScaleValue = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      scrollOffsetSharedValue.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH],
      [0, 20],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      }
    );

    return {
      transform: [{ scale: scaleValue }],
    };
  });

  return (
    <Animated.View
      key={bgColor}
      style={[
        styles.container,
        animatedScaleValue,
        { backgroundColor: bgColor },
      ]}
    ></Animated.View>
  );
};

export default BackgroundColor;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 100,
    position: 'absolute',
    zIndex: 1,
  },
});

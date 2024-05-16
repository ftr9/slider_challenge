import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import { CHARACTERS } from '../data';
import { View, StyleSheet, ImageBackground } from 'react-native';

import { SCREEN_WIDTH } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const AddButton = ({
  scrollOffsetSharedValue,
}: {
  scrollOffsetSharedValue: SharedValue<number>;
}) => {
  const animatedBgColor = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      scrollOffsetSharedValue.value,
      CHARACTERS.map((_, index) => index * SCREEN_WIDTH),
      CHARACTERS.map(el => el.bgColor)
    );

    return {
      borderColor: bgColor,
    };
  });

  return (
    <View
      style={{
        height: 80,
      }}
    >
      <ImageBackground
        source={require('../../assets/button_layer.png')}
        style={{
          width: (130 / 100) * SCREEN_WIDTH,
          height: (130 / 100) * SCREEN_WIDTH,
          transform: [{ translateX: -50 }],
        }}
      >
        <Animated.View style={[styles.roundedButton, animatedBgColor]}>
          <Ionicons name="add" size={24} />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  roundedButton: {
    height: 75,
    width: 75,
    position: 'absolute',
    top: '-10%',
    left: '50%',
    borderRadius: 1000,
    transform: [{ translateX: -45 }],
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { View } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../constants';

const BackgroundColors = ({ children }: { children: React.ReactNode }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        zIndex: -1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default BackgroundColors;

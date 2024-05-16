import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { View, Text, Image } from 'react-native';
import { CHARACTERS } from '../data';
import { SCREEN_WIDTH } from '../../constants';
import { ICharacter } from '../types';

const CharacterItem = (item: ICharacter) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          letterSpacing: 5,
          color: 'white',
        }}
      >
        {item.type}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          letterSpacing: 5,
          color: 'white',
        }}
      >
        {item.typeDec}
      </Text>
      <Image
        style={{
          height: '60%',
          width: SCREEN_WIDTH,
          //backgroundColor: 'red',
          marginVertical: 30,
        }}
        source={item.image}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: '500', color: 'white' }}>
        {item.name}
      </Text>
    </View>
  );
};

const CharacterRenderer = ({
  scrollOffsetSharedValue,
}: {
  scrollOffsetSharedValue: SharedValue<number>;
}) => {
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: e => {
      scrollOffsetSharedValue.value = e.contentOffset.x;
    },
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Animated.FlatList
        data={CHARACTERS}
        keyExtractor={(_, index) => `${index}`}
        snapToInterval={SCREEN_WIDTH}
        decelerationRate={0.07}
        snapToAlignment={'center'}
        onScroll={scrollHandle}
        horizontal
        renderItem={({ item }) => <CharacterItem {...item} />}
      />
    </View>
  );
};

export default CharacterRenderer;

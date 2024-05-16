import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <Ionicons
        name="chevron-back-circle-outline"
        color={'white'}
        size={24}
      ></Ionicons>
    </View>
  );
};

export default Header;

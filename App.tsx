import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { CHARACTERS } from './components/data';
import BackgroundColor from './components/ui/BackgroundColor';
import Header from './components/ui/Header';
import CharacterRenderer from './components/ui/CharactersRenderer';
import BackgroundColors from './components/wrappers/BackgroundColors';
import AddButton from './components/ui/AddButton';
export default function App() {
  const scrollOffsetSharedValue = useSharedValue<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CharacterRenderer scrollOffsetSharedValue={scrollOffsetSharedValue} />
      <BackgroundColors>
        {CHARACTERS.map(({ bgColor }, index) => {
          return (
            <BackgroundColor
              index={index}
              key={bgColor}
              bgColor={bgColor}
              scrollOffsetSharedValue={scrollOffsetSharedValue}
            />
          );
        })}
      </BackgroundColors>
      <AddButton scrollOffsetSharedValue={scrollOffsetSharedValue} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

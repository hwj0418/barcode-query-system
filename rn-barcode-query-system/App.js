import React from 'react';
import { StyleSheet, View } from 'react-native';

// Import screens
import ScanScreen from './screens/ScanScreen.js';

export default function App() {

  return (
    <View style={styles.screen}>
      <ScanScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

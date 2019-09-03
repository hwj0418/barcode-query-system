import React from 'react';
import { StyleSheet, View } from 'react-native';

import BarcodeScanner from './components/BarcodeScanner.js';

export default function App() {

  return (
    <View style={styles.screen}>
      <View style={styles.barCodeScannerContainer}>
        <BarcodeScanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  barCodeScannerContainer: {
    width: 300,
    maxWidth: '80%',
    height: 500,
    maxHeight: '80%'
  }
});

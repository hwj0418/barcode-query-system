import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

// Import components
import BarcodeScanner from '../components/BarcodeScanner.js';
import Header from '../components/Header.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

const ScanScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.barCodeScannerContainer}>
        <BarcodeScanner />
      </View>
    </View>
  );
};

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

export default ScanScreen;

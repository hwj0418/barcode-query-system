import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

// Import components
import BarcodeScanner from '../components/BarcodeScanner.js';
import Header from '../components/Header.js';
import Input from '../components/Input.js';
import ToggleView from '../components/ToggleView.js';

// Import constants
import Colors from '../constants/colors.js';
import Texts from '../constants/texts-en.js';

const ScanScreen = (props) => {

  // Hooks
  const [barcode, setBarcode] = useState('');
  const [keyboardEnabled, setKeyboardEnabled] = useState(false);

  // Handler for finishing a barcode scanning
  const barcodeScannedHandler = (barcode) => {
    console.log("barcodeScannedHandler is called...");
    setBarcode(barcode);
    console.log("Print out scanned barcode from ScanScreen: " + barcode);
  };

  // Handler for pressing barcode result showing input box
  const barcodeInputPressedHandler = () => {
    console.log("barcodeInputPressedHandler is called...");
    console.log("Before calling setKeyboardEnabled(true): " + keyboardEnabled);
    setKeyboardEnabled(true);
    console.log("Keyboard enabeled: " + keyboardEnabled);
  };

  // Handler for editing barcode result showing input box
  const barcodeInputEditHandler = (newBarcode) => {
    console.log("barcodeInputEditHandler is called...");
    setKeyboardEnabled(true);
    setBarcode(newBarcode);
  };
  console.log("Before rendering in ScanScreen, keyboardEnabled: " + keyboardEnabled);
  console.log("Before rendering in ScanScreen, !keyboardEnabled: " + !keyboardEnabled + "\n");
  return (
    <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
      setKeyboardEnabled(false);
    }}
    >
      <View style={styles.screen}>
        <Header />
        <ToggleView
          hide={keyboardEnabled}
          style={styles.barCodeScannerContainer}
        >
          <BarcodeScanner onBarcodeScanned={barcodeScannedHandler} />
        </ToggleView>
        <View style={styles.scanResultContainer}>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCaptalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            onChangeText={barcodeInputEditHandler}
            onFocus={barcodeInputPressedHandler}
            value={barcode}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  barCodeScannerContainer: {
    width: 300,
    maxWidth: '80%',
    height: 500,
    maxHeight: '80%',
    paddingVertical: 30
  },
  scanResultContainer: {
    flexDirection: 'column',

  },
  input: {
    width: 300,
    maxWidth: '80%',
    textAlign: 'center'
  }
});

export default ScanScreen;

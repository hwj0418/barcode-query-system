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
  TouchableOpacity,
  ScrollView
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

  // Handler for hiding keyboard when user clicked somewhere other than the keypad
  const hideKeyboardHandler = () => {
    Keyboard.dismiss();
    setKeyboardEnabled(false);
  };

  return (
    <TouchableWithoutFeedback
    onPress={hideKeyboardHandler}
    >
      <View style={styles.screen}>

        <Header />

        <ScrollView contentContainerStyle={styles.body}>

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

            <View style={styles.buttonContainer}>

              <TouchableOpacity style={styles.backButton}>
                <Button
                  title={Texts.backButtonText}
                  color='white'
                  onPress={() => {}}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.confirmButton}>
                <Button
                  title={Texts.confirmButtonText}
                  color='white'
                  onPress={() => {}}
                />
              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  body: {
    width: '100%',
    alignItems: 'center'
  },
  barCodeScannerContainer: {
    width: 300,
    maxWidth: '80%',
    height: 500,
    maxHeight: '80%',
    paddingVertical: 5,
    marginTop: 20
  },
  scanResultContainer: {
    flexDirection: 'column',
  },
  input: {
    width: 300,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    textAlign: 'center',
    fontSize: 25
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5
  },
  backButton: {
    width: 130,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  },
  confirmButton: {
    width: 130,
    maxWidth: '80%',
    height: 50,
    maxHeight: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  }
});

export default ScanScreen;

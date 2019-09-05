import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Import screens
import ScanScreen from './screens/ScanScreen.js';
import HomeScreen from './screens/HomeScreen.js';

// Import components
import Header from './components/Header.js';

export default function App() {

  // Hooks
  const [homeScreenOn, setHomeScreenOn] = useState(true);
  const [barcode, setBarcode] = useState('');

  // Handler for Home button redirection on Header
  const redirectToHome = () => {
    setHomeScreenOn(true);
  };

  // Handler for redirecting from HomeScreen to ScanScreen
  const homeScreentoScanScreenHandler = () => {
    setHomeScreenOn(false);
  };

  // Handler for redirecting from ScanScreen to HomeScreen
  const scanScreenToHomeScreenHandler = () => {
    setHomeScreenOn(true);
  };

  // Handler for redirecting from ScanScreen to HomeScreen with barcode transfering
  const scanScreenToHomeScreenWithBarcodeHandler = (barcode) => {
    setBarcode(barcode);
    setHomeScreenOn(true);
  };


  let content;
  if (homeScreenOn) {
    content = (
      <HomeScreen
        onScanButtonClicked={homeScreentoScanScreenHandler}
        barcode={barcode}
      />
    );
  } else {
    content = (
      <ScanScreen
        onBackButtonClicked={scanScreenToHomeScreenHandler}
        onConfirmButtonClicked={scanScreenToHomeScreenWithBarcodeHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      {/* Screen Header */}
      <Header onHomeClicked={redirectToHome} />
      {/* Main body for content */}
      { content }
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

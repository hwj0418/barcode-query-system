import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Import screens
import ScanScreen from './screens/ScanScreen.js';
import HomeScreen from './screens/HomeScreen.js';

export default function App() {

  // Hooks
  const [scanScreenOn, setScanScreenOn] = useState(false);

  // Handler for redirecting from HomeScreen to ScanScreen
  const homeScreentoScanScreenHandler = () => {
    setScanScreenOn(true);
  };

  // Handler for redirecting from ScanScreen to HomeScreen
  const scanScreenToHomeScreenHandler = () => {
    setScanScreenOn(false);
  };

  let content;
  if (!scanScreenOn) {
    content = (<HomeScreen onScanButtonClicked={homeScreentoScanScreenHandler} />);
  } else {
    content = (<ScanScreen onBackButtonClicked={scanScreenToHomeScreenHandler} />);
  }

  return (
    <View style={styles.screen}>
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

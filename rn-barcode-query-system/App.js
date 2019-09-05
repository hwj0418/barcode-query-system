import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Import screens
import ScanScreen from './screens/ScanScreen.js';
import HomeScreen from './screens/HomeScreen.js';

export default function App() {

  // Hooks
  const [scanScreenOn, setScanScreenOn] = useState(false);

  const clickScanButtonHandler = () => {
    setScanScreenOn(true);
  };

  let content;
  if (!scanScreenOn) {
    content = (<HomeScreen onScanButtonClicked={clickScanButtonHandler}/>);
  } else {
    content = (<ScanScreen />);
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

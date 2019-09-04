import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

// Import conponents
import Input from '../components/Input.js';

// Import constants
import Texts from '../constants/texts-en.js';

export default class BarcodeScanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      barcode: ''
    };
  }

  // Ask for permissions when elements are rendered
  async componentDidMount() {
    this.getPermissionsAsync();
  }

  // Ask for camera accessing permission
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  // Barcode scanned handler
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true, barcode: data });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.onBarcodeScanned(data.replace(/[^0-9]/g, ''));
  };

  // Barcode input box value updating handler
  barcodeInputHandler = (inputText) => {
    this.setState({ barcode: inputText.replace(/[^0-9]/g, '') });
  };

  render() {

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={styles.barcodeScanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <View style={styles.rescanButtonContainer}>
            <TouchableOpacity style={styles.rescanButton}>
              <Button
                title={Texts.rescanButtonText}
                color='white'
                onPress={() => this.setState({ scanned: false })}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

// Styling information
const styles = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  rescanButton: {
    maxWidth: '80%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    marginBottom: 20
  },
  rescanButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

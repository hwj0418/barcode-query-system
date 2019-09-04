import React from 'react';
import { View } from 'react-native';

// Import conponents
import BarcodeScanner from '../components/BarcodeScanner.js';

const ToggleView = (props) => {
  console.log("Before deciding if ToggleView should be rendered or not in ToggleView, props.hide: " + props.hide);
  if(props.hide) {
    console.log("ToggleView - inside 'if(props.hide)'");
    return null;
  }
  return (
    <View style={{...props.style}}>{ props.children }</View>
  );
};

export default ToggleView;

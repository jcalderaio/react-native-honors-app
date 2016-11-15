// obtained from react native tutorials

import React from 'react';
import { PixelRatio } from 'react-native';
import Dimensions from 'Dimensions';

const Util = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  post(url, data, callback) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      callback(responseData);
    });
  },
  key: 'BDKHFSDKJFHSDKFHWEFH-REACT-NATIVE',
};


// import {StyleSheet, Platform} from 'react-native';

// export function create(styles: Object): {[name: string]: number} {
//   const platformStyles = {};
//   Object.keys(styles).forEach((name) => {
//     let {ios, android, ...style} = {...styles[name]};
//     if (ios && Platform.OS === 'ios') {
//       style = {...style, ...ios};
//     }
//     if (android && Platform.OS === 'android') {
//       style = {...style, ...android};
//     }
//     platformStyles[name] = style;
//   });
//   return StyleSheet.create(platformStyles);
// }

export default Util;

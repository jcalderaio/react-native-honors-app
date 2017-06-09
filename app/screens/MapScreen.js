

import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          showsUserLocation
          followsUserLocation
          showsMyLocationButton
          style={styles.map}
          region={{
            latitude: -180,
            longitude: 0,
            latitudeDelta: 0,
            longitudeDelta: 0,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

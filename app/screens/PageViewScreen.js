import React, { Component } from 'react';
import { View } from 'react-native';
import SwiperScreen from '../components/SwiperScreen';
import { Header } from '../components/common';

export default class PageViewScreen extends Component {
  render() {
    return (
      <View>
        <Header headerText='Page View Screen' />
        <SwiperScreen />
      </View>
    );
  }
}

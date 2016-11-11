import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from '../components/common/styles';

export default class ToDoScreen extends Component {

  constructor(props) {
    super(props);
    this.messsage = 'its working!';
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {

  }

  render() {
      return (
        <View style={{ flex: 1 }}>
          <View style={styles.containerCenter}>
            <Text> This is screen two </Text>
          </View>
        </View>
      );
  }
}

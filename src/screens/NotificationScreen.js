import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a Notification!
        </Text>
        <TouchableOpacity onPress={ this.onDismissPress.bind(this) }>
          <Text style={styles.button}>Dismiss</Text>
        </TouchableOpacity>
      </View>
    );
  }
  onDismissPress() {
    this.props.navigator.dismissInAppNotification();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6e7ad'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 20
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: '#4692ad'
  }
});

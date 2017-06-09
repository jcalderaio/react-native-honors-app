
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { FBLogin } from 'react-native-facebook-login';
import { styles } from '../components/common/styles';
import { Header } from '../components/common';

var FB_PHOTO_WIDTH = 200;

//Combines exporting a Class and making a Class
export default class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    var user = this.state.user;

    return (
      <View style={{ backgroundColor: '#4099FF', flex: 1 }}>
        <Header headerText='Profile' />
        <View style={styles.containerCenter}>

          { user && <Photo user={user} /> }
          { user && <Info user={user} /> }

          <FBLogin
            style={{ marginBottom: 10, }}
            permissions={['email', 'user_friends']}
            onLogin={(data) => {
              console.log('Logged in!');
              console.log(data);
              this.setState({ user: data.credentials });
            }}
            onLogout={() => {
              console.log('Logged out.');
              this.setState({ user: null });
            }}
            onLoginFound={(data) => {
              console.log('Existing login found.');
              console.log(data);
              this.setState({ user: data.credentials });
            }}
            onLoginNotFound={() => {
              console.log('No user logged in.');
              this.setState({ user: null });
            }}
            onError={(data) => {
              console.log('ERROR');
              console.log(data);
            }}
            onCancel={() => {
              console.log('User cancelled.');
            }}
            onPermissionsMissing={(data) => {
              console.log('Check permissions!');
              console.log(data);
            }}
          />
        </View>
      </View>
    );
  }
}

class Photo extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      photo: null
    };
  }

  componentWillMount() {
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}/picture?width=${FB_PHOTO_WIDTH}&redirect=false&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          photo : {
            url : responseData.data.url,
            height: responseData.data.height,
            width: responseData.data.width,
          },
        });
      })
      .done();
  }

  renderLoading() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  render() {
    if (this.state.photo == null) return this.renderLoading();

    var photo = this.state.photo;

    return (
      <View style={styles.bottomBump}>

        <Image
          style={photo &&
            {
              height: photo.height,
              width: photo.width,
            }
          }
          source={{ uri: photo && photo.url }}
        />
      </View>
    );
  }

}

class Info extends Component {

  static propTypes: {
    user: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      info: null
    };
  }

  componentWillMount() {
    var user = this.props.user;
    var api = `https://graph.facebook.com/v2.3/${user.userId}?fields=name,email&access_token=${user.token}`;

    fetch(api)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          info: {
            name: responseData.name,
            email: responseData.email,
          },
        });
      })
      .done();
  }

  render() {
    var info = this.state.info;

    return (
      <View style={styles.bottomBump}>
        <Text>{ info && info.name }</Text>
        <Text>{ info && info.email }</Text>
      </View>
    );
  }
}

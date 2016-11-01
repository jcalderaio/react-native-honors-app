import React, { Component } from 'react';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { View, Text } from 'react-native';
import { Header, styles } from './components/common'; // Actually importing from ./components/common/index.js, but index is automattic


const user = [];

class Login extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['publish_actions']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert('Login failed with error: ', result.error)
              } else if (result.isCancelled) {
                alert('Login was cancelled')
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=', data.accessToken)
                    .then((response) => response.json())
                    .then((json) => {
                      user.name = json.name;
                      user.id = json.id;
                      user.user_friends = json.friends;
                      user.email = json.email;
                      user.username = json.name;
                      user.loading = false;
                      user.loggedIn = true;
                      console.log('User ID:', data.user);
                      // user.avatar = setAvatar(json.id);
                    })
                    .catch(() => {
                      reject('ERROR GETTING DATA FROM FACEBOOK')
                    });
                  }
                );
              }
            }
          }
          //onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

/*

initUser(token) {
  fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
  .then((response) => response.json())
  .then((json) => {
    // Some user object has been set up somewhere, build that user here
    user.name = json.name
    user.id = json.id
    user.user_friends = json.friends
    user.email = json.email
    user.username = json.name
    user.loading = false
    user.loggedIn = true
    user.avatar = setAvatar(json.id)
  })
  .catch(() => {
    reject('ERROR GETTING DATA FROM FACEBOOK')
  })
}
*/


class App extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#4099FF', flex: 1 }}>
				<Header headerText="Facebook Login" />
				<View style={styles.containerCenter}>
					<Login />
				</View>
			</View>
		);
	}
}


export default App;

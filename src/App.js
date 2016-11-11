import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

// screen related book keeping
import { registerScreens } from './screens';
registerScreens();

const createTabs = () => {
  const tabs = [
    {
      label: 'ProfileScreen',
      screen: 'ProfileScreen',
      icon: require('../img/profile.png'),
      selectedIcon: require('../img/profile_selected.png'),
      title: 'Profile',
      navigatorStyle: {
        navBarBackgroundColor: '#415DAE',
        navBarTextColor: '#fff'
      }
    },
    {
      label: 'ToDoScreen',
      screen: 'ToDoScreen',
      icon: require('../img/todo.png'),
      selectedIcon: require('../img/todo_selected.png'),
      title: 'To Do List',
      navigatorStyle: {
        navBarBackgroundColor: '#415DAE',
        navBarTextColor: '#fff'
      }
    }
  ];

/*
  if (Platform.OS === 'android') {
    tabs.push({
      label: 'Collapsing',
      screen: 'example.CollapsingTopBarScreen',
      icon: require('../img/one.png'),
      title: 'Collapsing',
    });
  }
  */
  return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs()
});


/*
import React, { Component } from 'react';
import { LoginButton, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { View, Text } from 'react-native';
import { Header, styles } from './components/common'; // Actually importing from ./components/common/index.js, but index is automattic

const user = [];

class Login extends Component {

  test() {
    console.log('Name: ', user.name);
    console.log('Id: ', user.id);
  }

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
                    var api = 'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + data.accessToken;
                    fetch(api)
                    .then((response) => response.json())
                    .then((json) => {
                       user.name = json.name;
                       user.id = json.id;
                       this.test();
                    //   user.user_friends = json.friends;
                    //   user.email = json.email;
                    //   user.username = json.name;
                    //   user.loading = false;
                    //   user.loggedIn = true;
                    //   console.log('User ID:', data.user);
                    //   // user.avatar = setAvatar(json.id);
                    })
                    .catch(() => {
                      reject('ERROR GETTING DATA FROM FACEBOOK')
                    });
                  }
                );
              }
            }
          }
          onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

class App extends Component {
	render() {
		return (
			<View style={{ backgroundColor: '#4099FF', flex: 1 }}>
				<Header headerText="Facebook Login" />
				<View style={styles.containerCenter}>
					<Login />
          <Text>
            {user.name}
          </Text>
				</View>
			</View>
		);
	}
}


export default App;
*/

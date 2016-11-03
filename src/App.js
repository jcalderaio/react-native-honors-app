import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      screen: 'example.FirstTabScreen',
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'),
      title: 'Screen Two',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  
  if (Platform.OS === 'android') {
    tabs.push({
      label: 'Collapsing',
      screen: 'example.CollapsingTopBarScreen',
      icon: require('../img/one.png'),
      title: 'Collapsing',
    });
  }
  return tabs;
};
// this will start our app
Navigation.startTabBasedApp({
  tabs: createTabs(),
  appStyle: {
    tabBarBackgroundColor: '#0f2362',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#63d7cc'
  },
  drawer: {
    left: {
      screen: 'example.SideMenu'
    }
  }
});
//Navigation.startSingleScreenApp({
//  screen: {
//    screen: 'example.FirstTabScreen',
//    title: 'Navigation',
//    navigatorStyle: {
//      navBarBackgroundColor: '#4dbce9',
//      navBarTextColor: '#ffff00',
//      navBarSubtitleTextColor: '#ff0000',
//      navBarButtonColor: '#ffffff',
//      statusBarTextColorScheme: 'light'
//    }
//  },
//  drawer: {
//    left: {
//      screen: 'example.SideMenu'
//    }
//  }
//});


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

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import ProfileScreen from '../screens/ProfileScreen';
import ToDoScreen from '../screens/ToDoScreen';
import PageViewScreen from '../screens/PageViewScreen';
import MapScreen from '../screens/MapScreen';

export const PageViewStack = StackNavigator({ // This contains both the Tabs
  PageViewScreen: {
    screen: PageViewScreen
  }
}, {
  headerMode: 'none'
});

export const Tabs = TabNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile',
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/profile.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  ToDoScreen: {
    screen: ToDoScreen,
    navigationOptions: {
      title: 'To Do List',
      tabBarLabel: 'To Do List',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/todo.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  PageViewStack: {
    screen: PageViewStack,
    navigationOptions: {
      title: 'Page View',
      tabBarLabel: 'Page View',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/scene.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Maps',
      tabBarLabel: 'Maps',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../img/map.png')}
          style={[styles.icon, { tintColor }]}
        />
      ),
    },
  },
});

const styles = {
  icon: {
    width: 26,
    height: 26,
  },
};

import {Navigation} from 'react-native-navigation';

import ProfileScreen from './ProfileScreen';
import ToDoScreen from './ToDoScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('ToDoScreen', () => ToDoScreen);
}

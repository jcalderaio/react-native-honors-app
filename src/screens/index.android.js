import {Navigation} from 'react-native-navigation';

import ProfileScreen from './ProfileScreen';
import ToDoScreen from './ToDoScreen';
import PageViewScreen from './PageViewScreen';
import MapScreen from './MapScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('ToDoScreen', () => ToDoScreen);
  Navigation.registerComponent('PageViewScreen', () => PageViewScreen);
  Navigation.registerComponent('MapScreen', () => MapScreen);
}

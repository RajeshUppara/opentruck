import {Navigation} from 'react-native-navigation';
// Initialize Screen

import LoginScreen from './login/LoginScreen';
import HomeScreen from './home/HomeScreen';
import TrucksScreen from './trucks/TrucksScreen';
import MapsScreen from './maps/MapsScreen';
import AdminScreen from './admin/AdminScreen';
import ConsumersScreen from './consumers/ConsumersScreen';
import TrucksSearchScreen from './trucks/TrucksSearchScreen';
import TruckDetailsScreen from './trucks/TrucksDetailsScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('creddebApp.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('creddebApp.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('creddebApp.TrucksScreen', () => TrucksScreen, store, Provider);
  Navigation.registerComponent('creddebApp.MapsScreen', () => MapsScreen, store, Provider);
  Navigation.registerComponent('creddebApp.AdminScreen', () => AdminScreen, store, Provider);
  // Navigation.registerComponent('creddebApp.ConsumersScreen', () => ConsumersScreen, store, Provider);
  Navigation.registerComponent('creddebApp.TrucksSearchScreen', () => TrucksSearchScreen, store, Provider);
  Navigation.registerComponent('creddebApp.TruckDetailsScreen', () => TruckDetailsScreen, store, Provider);
}

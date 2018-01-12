import {Navigation} from 'react-native-navigation';
// Initialize Screen

import LoginScreen from './login/LoginScreen';
import HomeScreen from './home/HomeScreen';
import CreditorsScreen from './creditors/CreditorsScreen';
import DebitorsScreen from './debitors/DebitorsScreen';
import AdminScreen from './admin/AdminScreen';
import ConsumersScreen from './consumers/ConsumersScreen';
import CreditorsSearchScreen from './creditors/CreditorsSearchScreen';
import CreditorDetailsScreen from './creditors/CreditorDetailsScreen';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('creddebApp.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('creddebApp.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('creddebApp.CreditorsScreen', () => CreditorsScreen, store, Provider);
  Navigation.registerComponent('creddebApp.DebitorsScreen', () => DebitorsScreen, store, Provider);
  Navigation.registerComponent('creddebApp.AdminScreen', () => AdminScreen, store, Provider);
  Navigation.registerComponent('creddebApp.ConsumersScreen', () => ConsumersScreen, store, Provider);
  Navigation.registerComponent('creddebApp.CreditorsSearchScreen', () => CreditorsSearchScreen, store, Provider);
  Navigation.registerComponent('creddebApp.CreditorDetailsScreen', () => CreditorDetailsScreen, store, Provider);
}

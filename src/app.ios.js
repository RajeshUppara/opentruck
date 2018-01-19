/** Main entry point
    See https://github.com/wix/react-native-navigation/tree/master/example for more documentation
    on setting this up. This is very in line with React Native Navigations bootstrap.

**/

import { Dimensions } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import thunk from 'redux-thunk';
//import createLogger from 'redux-logger';
import * as reducers from './redux';
import * as appActions from './redux/app/actions';

import { Icon, fonts, palette, breakPointPercentage } from './constants/styles';
import { navigatorButtons } from './constants/navigatorButtons';


const { width } = Dimensions.get('window');
//const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// Import screens and register them
import { registerScreens } from './containers';
registerScreens(store, Provider);


export default class App {

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appActions.appInitialized());

    //var homeIcon = <Icon icon="briefcase" width="40" height="40" color="#E7ECE9" />;
  }

  onStoreUpdate() {
    const { root } = store.getState().app;
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }

  startApp(root) {
    switch (root) {
      case 'home':
        Navigation.startSingleScreenApp({
          screen: {
            label: 'Home',
            screen: 'creddebApp.HomeScreen',
            title: 'Home'
          },
        });
        return;
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'creddebApp.LoginScreen',
            title: 'Loading',
            navigatorStyle: {}
          }
        });
        return;
      case 'loggedIn':
        Navigation.startTabBasedApp({
          tabs: [
            // {
            //   label: 'Consumers',
            //   screen: 'creddebApp.ConsumersScreen',
            //   icon: require('./assets/images/home.png'),
            //   title: 'Consumers',
            //   navigatorStyle: {
            //     navBarTextColor: 'white',
            //     navBarTextFontSize: 18,
            //     navBarTextFontFamily: 'Maven Pro',
            //     navBarBackgroundColor: '#e03333'
            //   }
            // },
            // {
            //   label: 'Track',
            //   screen: 'creddebApp.AdminScreen',
            //   icon: require('./assets/images/home.png'),
            //   title: 'TRUCKS',
            //   //navigatorButtons: navigatorButtons.admin,
            //   navigatorStyle: {
            //     navBarTextColor: 'white',
            //     navBarTextFontSize: 30,
            //     navBarTextFontFamily: 'Maven Pro',
            //     navBarBackgroundColor: 'rgba(66,141,144,1)'
            //   }
            // },
            {
              label: 'Track',
              screen: 'creddebApp.CreditorsScreen',
              icon: require('./assets/images/home.png'),
              title: 'TRUCKS',
              //navigatorButtons: navigatorButtons.creditors,
              navigatorStyle: {
                navBarTextColor: 'white',
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'Maven Pro',
                navBarBackgroundColor: 'rgba(66,141,144,1)'
              }
            },
            {
              label: 'Maps',
              screen: 'creddebApp.DebitorsScreen',
              icon: require('./assets/images/Creditors2.png'),
              title: 'MAPS',
              navigatorStyle: {
                navBarTextColor: 'white',
                navBarTextFontSize: 30,
                navBarTextFontFamily: 'Maven Pro',
                navBarBackgroundColor: 'rgba(66,141,144,1)'
              }
            }
          ],
          passProps: {
            tabIndex: "screenInstanceID7"
          },
          tabsStyle: {
            forceTitlesDisplay: true,
            tabBarButtonColor: '#514c4c',
            tabBarSelectedButtonColor: 'rgba(66,141,144,1)',
            tabBarBackgroundColor: 'rgb(244, 245, 247)',
            tabBarSelectedLabelColor: 'black',
            tabBarTextFontFamily: 'Maven Pro',
            initialTabIndex: 0
          },
          appStyle: {
            orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
            bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
            bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
            hideBackButtonTitle: false, // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only,
            tabBarTranslucent: false,
            forceTitlesDisplay: true
          },
          animationType: 'none'
        });
        return;
      default:
        console.error('Unknown app root');
    }
  }
}

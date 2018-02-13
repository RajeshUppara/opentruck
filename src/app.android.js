/** Main entry point
    See https://github.com/wix/react-native-navigation/tree/master/example for more documentation
    on setting this up. This is very in line with React Native Navigations bootstrap.

**/

import { Dimensions, Alert } from 'react-native';
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
              screen: 'creddebApp.TrucksScreen',
              icon: require('./assets/images/home.png'),
              title: 'TRUCKS',
              //navigatorButtons: navigatorButtons.creditors,
              navigatorStyle: {
               // navBarTextColor: 'black',
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'Maven Pro',
                navBarBackgroundColor: 'rgba(66,141,144,1)',
                navBarHeight: 55,
                navBarButtonColor: 'black'
              }
            },
            {
              label: 'Maps',
              screen: 'creddebApp.MapsScreen',
              icon: require('./assets/images/Creditors2.png'),
              title: 'MAPS',
              navigatorStyle: {
                navBarTextColor: 'white',
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'Maven Pro',
                navBarBackgroundColor: 'rgba(66,141,144,1)',
                navBarHeight: 55
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
            initialTabIndex: 0,
            bottomTabBadgeTextColor: 'white', // Optional, change badge text color. Android only
            bottomTabBadgeBackgroundColor: '#c12222', // Optional, change badge background color. Android only
          },
          appStyle: {
            // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
            bottomTabBadgeTextColor: 'white', // Optional, change badge text color. Android only
            bottomTabBadgeBackgroundColor: '#c12222', // Optional, change badge background color. Android only
            hideBackButtonTitle: false, // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only,
            tabBarTranslucent: false,
            forceTitlesDisplay: true,
            tabBarButtonColor: '#514c4c',
            tabBarSelectedButtonColor: 'rgba(66,141,144,1)',
            tabBarBackgroundColor: 'rgb(244, 245, 247)',
            tabBarSelectedLabelColor: 'black',
          },
          drawer: { // optional, add this if you want a side menu drawer in your app
            left: { // optional, define if you want a drawer from the left
              screen: 'creddebApp.TruckSearchIconComponent', // unique ID registered with Navigation.registerScreen
              passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
              fixedWidth: width < 400 ? 800 : 1200// a fixed width you want your left drawer to have (optional)
            },
            style: { // ( iOS only )
              drawerShadow: true, // optional, add this if you want a side menu drawer shadow
              contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
              leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
              rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
              shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
            },
            // disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
          },
          animationType: 'none'
        });
        return;
      default:
        console.error('Unknown app root');
    }
  }
}

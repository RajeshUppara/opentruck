/** Main entry point
    See https://github.com/wix/react-native-navigation/tree/master/example for more documentation
    on setting this up. This is very in line with React Native Navigations bootstrap.

**/

import React, { Component } from 'react';
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

import { iconsMap, iconsLoaded } from './utils/AppIcons';


const { width } = Dimensions.get('window');
//const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

// Import screens and register them
import { registerScreens } from './containers';
registerScreens(store, Provider);


export default class App extends Component {

  constructor(props) {
    super(props);
    iconsLoaded.then(() => {
			//this.startApp();
		});
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
            {
              label: 'Track',
              screen: 'creddebApp.TrucksScreen',
              icon: iconsMap['ios-analytics-outline'],
					    selectedIcon: iconsMap['ios-analytics'],
              title: 'Trucks',
              navigatorStyle: {
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'MavenPro-Medium',
                navBarBackgroundColor: 'rgb(255, 255, 255)',
                navBarHeight: 60,
                navBarButtonColor: 'black'
              }
            },
            {
              label: 'Search',
              screen: 'creddebApp.SearchScreen',
              icon: iconsMap['ios-search-outline'],
					    selectedIcon: iconsMap['ios-search'],
              title: 'Search',
              navigatorStyle: {
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'MavenPro-Medium',
                navBarBackgroundColor: 'rgb(255, 255, 255)',
                navBarHeight: 60,
                navBarButtonColor: 'black'
              }
            },
            {
              label: 'Maps',
              screen: 'creddebApp.MapsScreen',
              icon: iconsMap['ios-navigate-outline'],
					    selectedIcon: iconsMap['ios-navigate'],
              title: 'Maps',
              navigatorStyle: {
                navBarTextFontSize: 18,
                navBarTextFontFamily: 'MavenPro-Medium',
                navBarBackgroundColor: 'rgb(255, 255, 255)',
                navBarHeight: 60
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
            tabBarTextFontFamily: 'MavenPro-Medium',
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
            tabFontFamily: 'MavenPro-Medium'
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

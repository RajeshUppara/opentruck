import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  AlertAndroid
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigatorButtons } from '../../constants/navigatorButtons';
import { Navigation } from 'react-native-navigation';

import TrucksListComponent from '../../components/truck/TrucksListComponent';

const { width } = Dimensions.get('window');

class TrucksScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true,
    navBarTextFontFamily: 'Maven Pro',
    //navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#000000',
    statusBarTextColorScheme: 'dark'
  }

  
  constructor(props) {
    super(props);
    //Alert.alert(width.toString());
    //Alert.alert(visibleScreenInstanceId);
    this.state = {
      size: {
        width,
        height: width + 50
      }
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.props.navigator.setTabBadge({
      tabIndex: 0, // (optional) if missing, the badge will be added to this screen's tab
      badge: 17, // badge value, null to remove badge
      badgeColor: '#c12222', // (optional) if missing, the badge will use the default color
    });

  }

 componentWillMount() {

    // this.props.navigator.setTabButton({
    //   tabIndex: 0, // (optional) if missing, the icon will be added to this screen's tab
    //   icon: require('../../assets/images/Creditors2.png')
    // });

    this.props.navigator.setButtons({
      
      rightButtons: [
        {
          id: 'userprofile',
          component: 'creddebApp.TruckProfileComponent',
          passProps: {
            navigator: this.props.navigator,
          },
          //title:"Rajesh"
        },
        // {
        //   id: 'trucksearch',
        //   component: 'creddebApp.TruckSearchIconComponent'
        // }
      ], // see "Adding buttons to the navigator" below for format (optional)
  
      
    });
  

    // const visibleScreenInstanceId = await Navigation.getCurrentlyVisibleScreenId();
    // console.log(this.props.tabIndex);
    // Alert.alert(visibleScreenInstanceId);
  }



  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      Alert.alert("dsFAS");
      if (event.id == 'creditorsearch') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.showModal({
          screen: 'creddebApp.TrucksSearchScreen', // unique ID registered with Navigation.registerScreen
          navigatorButtons: {
            leftButtons: [
              {
                title: "Cancel",
                id: 'cancel'
              }
            ]
          }
        });
      }

      if (event.id == 'userprofile') {
       
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
          to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        });
      }
    }
  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <TrucksListComponent
          navigator={this.props.navigator}
          openDrawer={this.openDrawer} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}


export default connect(mapStateToProps)(TrucksScreen);

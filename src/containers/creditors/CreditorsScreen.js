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
import {Navigation} from 'react-native-navigation';

import CreditorsListComponent from '../../components/creditor/CreditorsListComponent';

const { width } = Dimensions.get('window');

class CreditorsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true,
    navBarTextFontFamily: 'Maven Pro'
  }

  

  constructor(props) {
    super(props);
    
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
      badgeColor: '#006400', // (optional) if missing, the badge will use the default color
    });

  }

  async componentWillMount() {
    const visibleScreenInstanceId = await Navigation.getCurrentlyVisibleScreenId();
    console.log(this.props.tabIndex);
   // Alert.alert(visibleScreenInstanceId);
  }



  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'creditorsearch') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.showModal({
          screen: 'creddebApp.CreditorsSearchScreen', // unique ID registered with Navigation.registerScreen
          navigatorButtons: {leftButtons: [
            {
              title: "Cancel",
              id: 'cancel'
            }
          ]
        }
        });
      
      }
    }

    if (event.id === 'bottomTabSelected') {
      //this.props.tabIndex = "screenInstanceID6";
    }
    if (event.id === 'bottomTabReselected') {
      //this.props.tabIndex = "screenInstanceID7";
    }


  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <CreditorsListComponent
          navigator={this.props.navigator} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(CreditorsScreen);

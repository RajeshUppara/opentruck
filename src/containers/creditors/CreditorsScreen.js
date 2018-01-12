import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { navigatorButtons } from '../../constants/navigatorButtons';

import CreditorsListComponent from '../../components/creditor/CreditorsListComponent';

const { width } = Dimensions.get('window');

class CreditorsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true
  }

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height: width + 50
      }
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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

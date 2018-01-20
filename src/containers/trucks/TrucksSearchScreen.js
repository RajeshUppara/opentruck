import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreditorsListComponent from '../../components/truck/TrucksListComponent';
import { palette } from '../../constants/styles';

const { width } = Dimensions.get('window');

class TrucksSearchScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarHidden: true
  }

  static navigatorButtons = { 
    leftButtons: [
      {
        title: "Cancel",
        id: 'cancel'
      }
    ]
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
    if (event.id == 'cancel') {
      this.props.navigator.dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
      });
    }
  }

  render() {

    return (
      <View style={{ flex: 1 , backgroundColor: palette.gray.light}}>
        <Text>This is creditors serach screen</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}></TextInput>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(TrucksSearchScreen);

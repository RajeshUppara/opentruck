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
import { palette } from '../../constants/styles';
import { Divider, Avatar, Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

const { width } = Dimensions.get('window');

class TruckSearchIconComponent extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height: width + 50
      }
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', width: '75%' }}>
        <View style={{ marginRight: width > 350 ? 20 : -20 }}>
        <Text>Drawer screen </Text>
          {/* <Icon
            name='search'
            type='material icon'
            color='#FFFFFF'
            size={32}
          /> */}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(TruckSearchIconComponent);

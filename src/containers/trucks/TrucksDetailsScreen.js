import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text
} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TrucksListComponent from '../../components/truck/TrucksListComponent';

const { width } = Dimensions.get('window');

class TruckDetailsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    tabBarHidden: true,
    navBarTextColor: '#000000',
    statusBarTextColorScheme: 'dark'
  };

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
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text>This is Truck details screen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(TruckDetailsScreen);

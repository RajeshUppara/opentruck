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

const { width } = Dimensions.get('window');

class ConsumersScreen extends Component {

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
  }

  render() {
    
    return (
      <View style={{flex: 1}}>
        <Text>This is the Consumers screen</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(ConsumersScreen);

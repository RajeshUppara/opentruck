import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PropTypes from 'prop-types';

import {palette, fonts} from '../../constants/styles';
import * as appActions from '../../redux/app/actions';
import ForgotPasswordComponent from '../../components/login/ForgotPasswordComponent';

const { width } = Dimensions.get('window');

class ForgotPasswordScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    tabBarHidden: true,
    navBarHidden: true
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

  Login() {
    this.props.dispatch(appActions.changeAppRoot('loggedIn'));
  }

  render() {
    
    return (
      <ForgotPasswordComponent 
        dispatch = {this.props.dispatch} 
        Login = {this.props.Login}
        navigator= {this.props.navigator}
        />
    );
  }
}

function Login(dispatch) {
  dispatch(appActions.changeAppRoot('loggedIn'));
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    Login
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);

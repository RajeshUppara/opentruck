import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { palette, Icon } from '../../constants/styles';
import LoadingIndicator from '../../components/loading/LoadingIndicator';
import * as appActions from '../../redux/app/actions';
import * as userActions from '../../redux/user/actions';
import * as tokenActions from '../../redux/token/actions';
const { width } = Dimensions.get('window');

class HomeScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarHidden: true,
    navBarTitleTextCentered: true
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

  componentWillMount() {
    // Set app properties given by config
    const properties = {

    };
    // Store properties in localStorage and dispatch to profile state
    // This will make 'app.properties' available as props
    AsyncStorage.setItem('properties', JSON.stringify(properties)).then(() => {
      this.props.dispatch(appActions.propertyInjection(properties));
    });
  }

  componentDidMount() {
    // Verify user status (logged in or not?)
    this.checkUserStatus();
  }

  /**
  * Checks the login status of returning or new user
  */
  checkUserStatus() {
    // Check the user AsyncStorage values, if a user is found, verify their token and log in
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      if (user && user.profile.first_name && user.profile.email) {
        // Looks like a user was found, let's verify their token.
        this.verifyToken();
      } else {
        // Take them to the login screen
        this.props.dispatch(appActions.changeAppRoot('login'));
      }
    }).catch(() => {
      // Take them to the login screen
      this.props.dispatch(appActions.changeAppRoot('login'));
    });
  }

  verifyToken() {
    // Execute isValidToken from redux/token/actions.
    tokenActions.isValidToken().then(res => {
      if (res) {
        // Token was successful, let's log user back in
        this.authenticatedRedirect();
      } else {
        // Token was unsuccessful, most likely an issue on the server for refreshing,
        // or the refresh token was expired
        this.props.dispatch(userActions.loginError());
        this.props.dispatch(appActions.changeAppRoot('login'));
      }
    });
  };

  authenticatedRedirect() {
    // Jump right to requestProfile in redux/user/actions
    this.props.dispatch(userActions.requestProfile());
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <LoadingIndicator/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(HomeScreen);

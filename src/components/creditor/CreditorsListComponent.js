import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
// import CookieManager from 'react-native-cookies';
import { connect } from 'react-redux';
import { palette, fonts } from '../../constants/styles';
import * as userActions from '../../redux/user/actions';
import CreditorsListView from './CreditorsListView';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

export default class CreditorsListComponent extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  Login() {
    this.props.Login(this.props.dispatch)
  }

  render() {
    let creditorslist = <CreditorsListView 
    navigator={this.props.navigator}/>;

    return (
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow:1}} scrollEnabled>
          {
            <View style={{flex: 1}}>
              {
                creditorslist
              }
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background_image: {
    flex: 1,
    height: null,
    justifyContent: 'center',
    marginTop: -180,
    resizeMode: 'contain',
    width: null
  },
  container: {
    alignSelf: 'center',
    backgroundColor: palette.gray.accent,
    borderColor: palette.gray.border,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 220,
    opacity: .95,
    padding: 20,
    width: width > 600 ? width / 1.8 : width - 20
  },
  logo_image: {
    alignSelf: 'center',
    height: 75,
    marginTop: -10,
    resizeMode: 'contain',
    width: 170
  },
  error_text: {
    color: 'red',
    marginBottom: 20
  },
  button: {
    backgroundColor: 'purple',
    padding: 14,
    borderRadius: 2,
    justifyContent: 'center'
  },
  button_alt: {
    backgroundColor: 'transparent',
    borderColor: palette.purple.base,
    borderWidth: 1
  },
  button_text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  }
});



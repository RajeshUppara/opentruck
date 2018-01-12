import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { palette, Icon } from '../../constants/styles';
import PropTypes from 'prop-types';
/**
  * Design requires that NavBar not render the way apple/google intended, so it must be faked
  */
export default class FakeNavBar extends Component {


  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    isModal: PropTypes.bool,
    navigator: PropTypes.object.isRequired,
    isHomeScreen: PropTypes.bool
  }

  /**
  * Handles the action peformed when Menu button is pressed
  */
  handleMenuPress() {
    if (this.props.isModal) {
      // Close modal if page was accessed from the side menu
      this.props.navigator.dismissModal({ animationType: 'slide-down' });
    } else {
      // Open the drawer menu if accessed from tabs stack
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  handleBarcodeButtonPress() {
    if(this.props.isHomeScreen){
      this.props.navigator.showModal({
        screen: 'bannerApp.BarcodeScreen'
      });
    }
  }

  render() {
    let MyCardButton = null;

    if(this.props.isHomeScreen){
      MyCardButton = (
        <TouchableOpacity onPress={() => this.handleBarcodeButtonPress()}>
          <View style={styles.menu_icon}>
            <Icon
              name={'barcode'}
              size={32}
              color={'#FFFFFF'}
            />
            <Text style={styles.menu_icon_text}>MY CARD</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <View style={[styles.top_bar, { backgroundColor: this.props.color || palette.purple.base }]}>

        <TouchableOpacity onPress={() => this.handleMenuPress()}>
          <View >
            <Text style={styles.menu_button}>MENU </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.title_container}>
          <Image
            style={{ marginTop: 22, marginLeft: -40 }}
            source={require('../../../img/logo@2x.png')}
          />
          <Text style={styles.title_text}>
            {this.props.title}
          </Text>
        </View>
        {MyCardButton}
      </View>

    );
  }
}
const styles = StyleSheet.create({
  menu_icon:{
    flex: 1,
    marginTop: 15,
    marginRight: 20
  },
  menu_icon_text:{
    color: '#FFFFFF',
    fontSize: 9,
    textAlign: 'center'
  },
  top_bar: {
    flexDirection: 'row',
    backgroundColor: palette.purple.base,
    height: 64,
    paddingTop: 2
  },
  menu_button: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: palette.yellow.base
  },
  title_container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },
  title_text: {
    marginTop: 31,
    marginLeft: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
});

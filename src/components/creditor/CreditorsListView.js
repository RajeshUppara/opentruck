import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
import { Divider } from 'react-native-elements';
// import CookieManager from 'react-native-cookies';
import { connect } from 'react-redux';
import { palette, fonts, Icon } from '../../constants/styles';
import * as userActions from '../../redux/user/actions';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

export default class CreditorsListView extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  Login() {
    this.props.Login(this.props.dispatch)
  }

  render() {
    return (
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigator.push({
                screen: 'creddebApp.CreditorDetailsScreen', // unique ID registered with Navigation.registerScreen
                title: "DetailsScreen", // navigation bar title of the pushed screen (optional)
            })}
            }>
            <View style={[styles.list_info_area, { borderLeftColor: palette.red.base }]}>
              <View style={styles.main_view}>
                <View style={styles.inner_text_container}>
                  <Text style={[styles.Upper_text, { fontFamily: 'Maven Pro', fontWeight: '600' }]}>Rajesh Uppara</Text>
                </View>
                <View style={styles.distance_view}>
                  <View style={[styles.distance_text]}>
                    <Text style={{ fontSize: 13, color: palette.gray.text }}>Total Amount : </Text>
                    <Text style={{ fontSize: 13, color: palette.black.base }}>1,00,000</Text>
                  </View>
                  <View style={[styles.distance_text]}>
                    <Text style={{ fontSize: 13, color: palette.gray.text }}>Remaining Amount : </Text>
                    <Text style={{ color: palette.red.base, fontSize: 13 }}>10,000</Text>
                  </View>
                  <View style={{ marginLeft: 4 }}></View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: palette.gray.light, width: '95%', marginLeft: 10 }} />
        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  list_info_area: {
    // borderLeftWidth: 3,
    borderColor: palette.black.base,
    marginRight: 5,
    marginLeft: width > 350 ? 12 : -18,
    marginTop: 8,
    backgroundColor: 'white',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 1.5,
    // shadowOpacity: 0.6,
    borderBottomColor: 'black',
    elevation: 5,
    height: Platform.OS === 'ios' ? 65 : 65,
    width: width > 600 ? width / 1.8 : width - 20
  },
  contact_area_header: {
    padding: 12,
    marginBottom: 5,
    paddingLeft: 20,
    backgroundColor: 'white'

  },
  main_view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    marginBottom: 0,
    paddingLeft: 4
  },
  inner_text_container: {
    flexDirection: 'column',
    marginLeft: width > 350 ? 20 : 25,
    width: width > 350 ? 150 : 130
  },
  Upper_text: {
    bottom: 10,
    fontSize: 18,
    marginTop: 8,
    color: '#454547'
  },
  address_text: {
    fontSize: 11,
    color: palette.gray.text
  },
  distance_view: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    marginRight: 20,
    width: 260,
    marginTop: 12
  },
  distance_text: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    width: 220
  }
});



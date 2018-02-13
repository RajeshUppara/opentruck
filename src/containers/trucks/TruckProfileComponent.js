import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { palette } from '../../constants/styles';
import { Divider, Avatar, Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

const { width } = Dimensions.get('window');

class TruckProfileComponent extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    //navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height: width + 50
      }
    };

    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  openDrawer() {
    // this.props.navigator.toggleDrawer({
    //   side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
    //   animated: true, // does the toggle have transition animation or does it happen immediately (optional)
    //   to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
    // });
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', marginLeft: width > 350 ? 0 : 30, width: 40 }}>

          <TouchableOpacity
            onPress={() => {    this.props.navigator.toggleDrawer({
              side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
              animated: true, // does the toggle have transition animation or does it happen immediately (optional)
              to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
            });} }>
            <Avatar
              small
              rounded
              source={require('../../assets/images/avatar-truck1.png')}
              width={40}
              height={40}
              containerStyle={[styles.container_style, {
                backgroundColor: 'black', width: 34, height: 34, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6, elevation: 6,
                shadowRadius: 3, borderBottomColor: 'black', zIndex: 1
              }]}
              activeOpacity={0.7}
            // avatarStyle={{ shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.6,
            // shadowRadius: 1.5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_style: {
    marginTop: Platform.OS === 'ios' ? 0 : 14,
    right: Platform.OS === 'ios' ? 0 : 0,
    position: 'relative'
  }
});

// shadowColor: 'black',
// shadowOffset: { width: 0, height: 1 },
// shadowRadius: 1.5,
// shadowOpacity: 0.6,
// borderBottomColor: 'black',
// elevation: 5,

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(TruckProfileComponent);

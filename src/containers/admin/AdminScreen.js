import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  AlertIOS,
  StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
// import SvgUri from 'react-native-svg-uri';
import { SpinlitLoader } from '../../components/common/SpinkitLoader';
import Spinner from 'react-native-spinkit';
import LoadingIndicator from '../../components/loading/LoadingIndicator';
import Icon from '../../constants/Icons';
const { width } = Dimensions.get('window');
import PropTypes from 'prop-types';

class AdminScreen extends Component {

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
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'logout') { // this is the same id field from the static navigatorButtons definition
        // AlertIOS.alert('NavBar', 'LogOut button pressed');
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      }
    }
  }

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true,
    screenBackgroundColor: 'white'
  };

  render() {
    //var jobIcon = <Icon icon="briefcase" width="40" height="40" color="#E7ECE9" />;
    return (
      <View></View>
      // <View style={styles.container}>
      //   <Text>This is the Admin screen</Text>
      //   {/* <SpinlitLoader /> */}
      //   <Spinner style={styles.spinner} isVisible={true} size={40} type='FadingCircleAlt' color='#423f3f'/>
      //   {/* <LoadingIndicator /> */}

      //   {/* <Spinner
      //     name="Wave"
      //     color= '#070707'
      //     size={37}
      //     isVisible={true} /> */}
      //   {/* <Icon icon="briefcase" width="40" height="40" color="#E7ECE9" /> */}

      //   {/* <SvgUri width="200" height="200" source={require('../../assets/home.svg')} /> */}

      // </View>
      
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  spinner: {
    marginBottom: 50
  },

  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }
});

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(AdminScreen);

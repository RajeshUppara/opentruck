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
import { Container, Header, Content, Tab, Tabs } from 'native-base';

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
    Alert.alert(this.props.tabIndex)
    this.state = {
      size: {
        width,
        height: width + 50
      }
    };   
  }
  componentWillUnmount() {
    Alert.alert("fgjrj");
  }

  render() {
    
    return (
      <View style={{flex: 1}}>
        <Container style={{backgroundColor:"white"}}>
        <Header hasTabs />
        <Tabs initialPage={0} tabBarPosition="bottom" tabBarUnderlineStyle={{backgroundColor: "#e03333", borderBottomColor:"white"}}>
          <Tab heading="Tab1">
            
          </Tab>
          <Tab heading="Tab2">
            
          </Tab>
          <Tab heading="Tab3">
           
          </Tab>
        </Tabs>
      </Container>
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

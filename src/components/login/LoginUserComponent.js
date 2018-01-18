import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';
// import CookieManager from 'react-native-cookies';
import { connect } from 'react-redux';
import { palette, fonts } from '../../constants/styles';
import * as userActions from '../../redux/user/actions';
import PropTypes from 'prop-types';

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

const { width, height } = Dimensions.get('window');

export default class LoginUserComponent extends Component {

  static propTypes = {
  }

  constructor(props) {
    super(props);
  }

  Login() {
    this.props.Login(this.props.dispatch)
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <Image
          source={require('../../assets/images/mainscreen.png')}
          style={styles.image}
        />


        <Text style={styles.text1}>Login</Text>
        <View style={styles.rect1} />
        {/* <TextInput
              placeholder="UserName"
              style={styles.textInput1}
              placeholderTextColor="rgba(215,18,18,1)"
            />
            <TextInput placeholder="Password" style={styles.textInput2} /> */}

        <Container style={{ flex: 1, alignContent: 'center' }}>
          <Content>
            <Form>
              <Item floatingLabel style={styles.textInput1}>
                <Label style={{color: "rgba(66,141,144,1)", fontSize: 12}}>Username</Label>
                <Input style={{fontSize: 14}}/>
              </Item>
              <Item floatingLabel style={styles.textInput2}>
                <Label style={{color: "rgba(66,141,144,1)", fontSize: 12}}>Password</Label>
                <Input style={{fontSize: 14}} />
              </Item>
            </Form>
          </Content>
        </Container>
        <Text style={styles.text3}>Forgot password?</Text>
        <TouchableOpacity style={styles.button1} onPress={() => this.Login()} >
          <Text style={styles.text4}>LOGIN</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    opacity: 0.1,
    //backgroundColor: 'rgba(52, 52, 52, 0.8)'
    //backgroundColor: 'transparent'
  },
  root: {},
  text1: {
    backgroundColor: "transparent",
    top: 68,
    left: 34,
    position: "absolute",
    height: 32,
    width: 74,
    fontSize: 24,
    color: "rgba(66,141,144,1)"
  },
  rect1: {
    backgroundColor: "rgba(66,141,144,1)",
    height: 2,
    width: 42,
    top: 107,
    left: 37,
    position: "absolute",
    opacity: 1
  },
  textInput1: {
    height: 48,
    width: '86%',
    top: height - height / 1.45,
    marginLeft: (0.14 * width) / 2,
    marginRight: (0.14 * width) / 2,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  textInput2: {
    height: 48,
    width: '86%',
    top: height - height / 1.7,
    marginLeft: (0.14 * width) / 2,
    marginRight: (0.14 * width) / 2,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#000000"
  },
  text3: {
    backgroundColor: "transparent",
    top: height - height / 2.1,
    marginLeft: (0.14 * width) / 2,
    position: "absolute",
    height: 49,
    width: 162,
    fontSize: 13,
    color: "rgba(66,141,144,1)"
  },
  button1: {
    backgroundColor: "rgba(66,141,144,1)",
    height: 48,
    width: '86%',
    top: height - height / 2.5,
    marginLeft: (0.14 * width) / 2,
    marginRight: (0.14 * width) / 2,
    position: "absolute",
    opacity: 1,
    shadowColor: "rgba(66,141,144,1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.03,
    borderWidth: 1,
    borderColor: "rgba(66,141,144,0.5)",
    borderRadius: 2,
    shadowOpacity: 0.8
  },
  text4: {
    marginTop: 12,
    color: "white",
    fontSize: 14,
    alignSelf: 'center'
  }
});



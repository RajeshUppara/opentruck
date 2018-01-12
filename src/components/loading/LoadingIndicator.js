import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import {palette} from '../../constants/styles';

export default class LoadingIndicator extends Component {

  render() {
    return(
      <View style={styles.container} >
        <ActivityIndicator style={styles.spinner}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: palette.gray.bg
  },
  spinner: {
    alignSelf: 'center'
  }
});

import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Tab from './Tab';
import PropTypes from 'prop-types';

// This component supports 2 tabs

export default class Tabs extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    tabNames: PropTypes.object.isRequired,
    tabIndex: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Tab
          destination={0}
          tabName={this.props.tabNames.left}
          {...this.props}
        />
        <Tab
          destination={1}
          tabName={this.props.tabNames.right}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1000
  }
});

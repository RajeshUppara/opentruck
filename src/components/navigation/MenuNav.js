import React, {Component} from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {palette} from '../../constants/styles';
import MenuNavItem from './MenuNavItem';
import PropTypes from 'prop-types';

export default class MenuNav extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return(
      <View style={{flex:1, maxHeight: 64}}>
        <View style={styles.menu_nav}>
          <MenuNavItem
            icon={'home'}
            title={'Home'}
            size={20}
            color={palette.gray.dark}
            tabIndex={0}
            navigator={this.props.navigator}
          />
          <MenuNavItem
            icon={'circular'}
            title={'Circular'}
            size={20}
            color={palette.gray.dark}
            tabIndex={1}
            navigator={this.props.navigator}
          />
          <MenuNavItem
            icon={'coupons'}
            title={'Coupons'}
            size={20}
            color={palette.gray.dark}
            tabIndex={2}
            navigator={this.props.navigator}
          />
          <MenuNavItem
            icon={'rewards'}
            title={'Rewards'}
            size={20}
            color={palette.gray.dark}
            tabIndex={3}
            navigator={this.props.navigator}
          />
          <MenuNavItem
            icon={'recipes'}
            title={'Recipes'}
            size={20}
            color={palette.gray.dark}
            tabIndex={4}
            navigator={this.props.navigator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu_nav: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray.light
  }
});

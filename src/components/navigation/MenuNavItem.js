import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Icon, fonts, palette} from '../../constants/styles';
import PropTypes from 'prop-types';

export default class MenuNavItem extends Component {

  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    tabIndex: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  /**
    * Deep links a tab type event and passes the desired tabIndex
    */
  navigateToTab(tabIndex) {
    this.props.navigator.handleDeepLink({
      link: 'tab/' + tabIndex
    });
    this.props.navigator.dismissModal({animationType: 'slide-down'});
  }

  render() {
    return(
      <TouchableOpacity
        style={styles.menu_nav_item}
        onPress={() => this.navigateToTab(this.props.tabIndex)}
      >
        <Icon
          name={this.props.icon}
          size={this.props.size}
          color={this.props.color}
        />
        <Text style={styles.menu_nav_item_text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menu_nav_item: {
    flex: 5,
    alignItems: 'center'
  },
  menu_nav_item_text: {
    marginTop: 2,
    fontFamily: fonts.proxima.regular,
    fontSize: 11,
    color: palette.gray.dark
  }
});

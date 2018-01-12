import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {fonts, palette} from '../../constants/styles';
import {handleTabChange} from '../../redux/tabs/actions';
import PropTypes from 'prop-types';

// TODO: Add support for dynamic active colors

export default class Tab extends Component {

  static propTypes = {
    tabIndex: PropTypes.number.isRequired,
    tabName: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    destination: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleTabPress(tabIndex) {
    this.props.dispatch(handleTabChange(this.props.name, tabIndex));
    this.setState({
      tabIndex
    });
  }

  renderActiveBorder() {
    return(
      this.props.destination === this.props.tabIndex ? (
        <View style={styles.active_border_container}>
          <View style={[styles.active_border, {backgroundColor: this.props.color}]}/>
          <View style={[styles.arrow, {borderTopColor: this.props.color}]}/>
        </View>
      ) : null
    );
  }

  render() {
    let {tabIndex, destination, tabName, color} = this.props;
    return(
      <TouchableOpacity
        style={[ styles.button, destination === tabIndex ? styles.button_active : null]}
        onPress={() => this.handleTabPress(destination)}
        disabled={destination === tabIndex}
        activeOpacity={0.90}
      >
        <View style={[styles.button_text_container, destination === tabIndex ? styles.active_tab : null]}>
          <Text style={[styles.button_text, (destination === tabIndex) ? {color, fontFamily: fonts.proxima.semibold}: null]}>
            {tabName}
          </Text>
        </View>
        {this.renderActiveBorder()}

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 47
  },
  button_active: {
    height: 55
  },
  button_text_container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: palette.gray.accent
  },
  button_text: {
    alignSelf: 'center',
    fontSize: 14,
    color: palette.gray.text,
    fontFamily: fonts.proxima.regular
  },
  active_tab: {
    backgroundColor: 'white'
  },
  active_tab_text: {
    fontFamily: fonts.proxima.semibold
  },
  active_tab_text_purple: {
    color: palette.purple.base,
    fontFamily: fonts.proxima.semibold
  },
  active_border_container: {
    height: 9,
    flexDirection: 'column',
    zIndex: 10
  },
  active_border: {
    backgroundColor: palette.blue.base,
    height: 3
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    alignSelf: 'center',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: palette.blue.base
  },
  active_border_purple: {
    backgroundColor: palette.purple.base,
    height: 3
  },
  arrow_purple: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    alignSelf: 'center',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: palette.purple.base
  }
});

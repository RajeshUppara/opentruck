import React, {Component} from 'react';
import {
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {palette, Icon} from '../../constants/styles';
import PropTypes from 'prop-types';

/**
  * Description of component
  */
export default class ModalNavBar extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  closeModal() {
    this.props.navigator.dismissModal({
      animationType: 'slide-down'
    });
  }

  render() {
    return (
      <View style={styles.top_bar}>
        <Image
          style={styles.logo_image}
          source={require('../../../img/logo_display.png')}
        />

        <TouchableOpacity
          onPress={() => this.closeModal()}
          style={styles.close_button}
        >
          <Icon
            name={'close'}
            size={15}
            color={palette.purple.base}
          />
        </TouchableOpacity>
      </View >
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  top_bar: {
    flexDirection: 'row',
    backgroundColor: palette.gray.accent,
    borderBottomColor: palette.gray.bg,
    borderBottomWidth: 1,
    height: 70,
    padding: 10,
    justifyContent: 'center'
  },
  logo_image: {
    flex: 1,
    maxHeight: 40,
    marginLeft: 10,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  close_button: {
    alignSelf: 'center',
    marginRight: 10
  }
});

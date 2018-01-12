import React, { Component } from 'react';
import {Icon, palette} from '../../constants/styles';
import PropTypes from 'prop-types';

export default class ErrorIcon extends Component {

  static propTypes = {
    style: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Icon
        name={'error-icon'}
        size={16}
        color={palette.red.base}
        style={this.props.style}
      />
    );
  }
}

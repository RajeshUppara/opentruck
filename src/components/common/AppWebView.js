import React, { Component } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

const WEBVIEW_REF = 'webview';

export default class AppWebView extends Component {

  static propTypes = {
    externalWebPage: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebView
        ref={WEBVIEW_REF}
        automaticallyAdjustContentInsets={false}
        source={{uri: this.props.externalWebPage}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        style={{flex: 1}}
      />
    );
  }
}

import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  AppState,
  Alert,
  Platform,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import PropTypes from 'prop-types';

import {palette, fonts} from '../../constants/styles';
import * as appActions from '../../redux/app/actions';
import SearchViewComponent from '../../components/search/SearchViewComponent';

const { width } = Dimensions.get('window');

class SearchScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    //tabBarHidden: true,
    //navBarHidden: true
  };

  constructor(props) {
    super(props);

    this.state = {
      size: {
        width,
        height: width + 50
      }
    };   
  }

  render() {
    
    return (
      <SearchViewComponent 
        dispatch = {this.props.dispatch} 
        navigator= {this.props.navigator}
        />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

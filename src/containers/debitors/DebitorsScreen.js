import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 3.146642;
const LONGITUDE = 101.695845;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//const LONGITUDE_DELTA = 0.0421;
const SPACE = 0.01;

class DebitorsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true
  }

  constructor(props) {
    super(props);
   
    this.state = {
      size: {
        width,
        height: width + 50
      },
      // latitude: LATITUDE,
      // longitude: LONGITUDE,
      region: {},
      coordinate: {}

    };

    // setTimeout(function () {
    //   // this.setState({
    //   //   latitude: 15.772551,
    //   //   longitude: 77.482360
    //   // });
    //   this.animate();
    // }.bind(this), 1000);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
          },
          coordinate: new MapView.AnimatedRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
        
      }
    );
    console.log("debitors2");
  }

  animate() {
    const { coordinate } = this.state;
    coordinate.timing({
      latitude: 15.772551,
      longitude: 77.482360,
      duration: 10000
    }).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
        {this.state.region.latitude &&
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <MapView.Marker.Animated
              coordinate={this.state.region}
              image={require('../../assets/images/movingtruck1.png')}
            />
          </MapView>
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(DebitorsScreen);

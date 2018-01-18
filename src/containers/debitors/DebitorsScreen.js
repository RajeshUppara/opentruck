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
const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

const ASPECT_RATIO = width / height;
// const LATITUDE = 3.146642;
// const LONGITUDE = 101.695845;
// const LATITUDE_DELTA = 0.08;
const LATITUDE = 15.764199;
const LONGITUDE = 77.475933;
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
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      coordinate: new MapView.AnimatedRegion({
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE - SPACE,
      }),
      rotation: 150,
      polyline: [
        {
          latitude: LATITUDE + SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - (2 * SPACE),
          longitude: LONGITUDE + (2 * SPACE),
        },
        {
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        },
        {
          latitude: LATITUDE - (2 * SPACE),
          longitude: LONGITUDE - SPACE,
        }
      ],


    };

    setTimeout(function () {
      this.state.coordinate.timing({
        latitude: LATITUDE - (2 * SPACE),
        longitude: LONGITUDE + (2 * SPACE),
        duration: 3000
      }).start();

    }.bind(this), 1000);

    
    setTimeout(function () {
      this.setState({
        coordinate: new MapView.AnimatedRegion({
          latitude: LATITUDE - (2 * SPACE),
          longitude: LONGITUDE + (2 * SPACE),
        }),
        rotation: 300
      });
      
      this.state.coordinate.timing({
        latitude: LATITUDE - SPACE,
        longitude: LONGITUDE - SPACE,
        duration: 3000
      }).start();
    }.bind(this), 4000);

    setTimeout(function () {
      this.setState({
        coordinate: new MapView.AnimatedRegion({
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        }),
        rotation: 186
      });

      this.state.coordinate.timing({
        latitude: LATITUDE - (2 * SPACE),
        longitude: LONGITUDE - SPACE,
        duration: 3000
      }).start();
    }.bind(this), 7000);
    //this.animate = this.animate.bind(this);
  }


  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);
  //       this.setState({
  //         region: {
  //           latitude: LATITUDE - (2 * SPACE),
  //           longitude: LONGITUDE - SPACE,
  //         },
  //         coordinate: {
  //           latitude: LATITUDE + SPACE,
  //           longitude: LONGITUDE - SPACE,
  //         },
  //       });

  //       var polyLines = this.state.polyline;
  //       setTimeout(function () {
  //         this.setState({
  //           coordinate: {
  //             latitude: LATITUDE - (2 * SPACE),
  //             longitude: LONGITUDE + (2 * SPACE),
  //           },
  //         });
  //       }.bind(this), 2000);
  //       setTimeout(function () {
  //         this.setState({
  //           coordinate: {
  //             latitude: LATITUDE - SPACE,
  //             longitude: LONGITUDE - SPACE,
  //           },
  //         });
  //       }.bind(this), 500);

  //       setTimeout(function () {
  //         this.setState({
  //           coordinate: {
  //             latitude: LATITUDE - (2 * SPACE),
  //             longitude: LONGITUDE - SPACE,
  //           },
  //         });
  //       }.bind(this), 500);
       

  //     }
  //   );
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState.coordinate.latitude);
  //   //console.log(this.state.coordinate.latitude);
  //   return false;
  // }

  // animate(region) {
  //   //const { coordinate } = this.state;
  //   this.state.coordinate.timing({
  //     latitude: region.latitude,
  //     longitude: region.longitude,
  //     duration: 3000
  //   }).start();

  //   this.setState({
  //     coordinate: new MapView.AnimatedRegion({
  //       latitude: region.latitude,
  //       longitude: region.latitude,
  //     })
  //   });
  // }

  render() {
    const { polyline } = this.state;
    const imageUrl = IOS ? require('../../assets/images/movingtruck.png') : require('../../assets/images/movingtruck1.png')
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.region.latitude &&
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsCompass={true}
              showsScale={true}
              loadingEnabled
              loadingIndicatorColor="#666666"
              loadingBackgroundColor="#eeeeee"
              showsBuildings={true}
              initialRegion={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              customMapStyle={mapStyle}
            >
              <MapView.Polyline
                coordinates={polyline}
                strokeColor="#000"
                // strokeColor="rgba(0,0,200,0.5)"
                strokeWidth={3}
              >

              </MapView.Polyline>
              <MapView.Marker.Animated
                coordinate={this.state.coordinate}
                //image={imageUrl}
                // style= {{
                //   transform: [
                //     { rotate: `${this.state.rotation}deg` }
                //   ]
                // }}
              />
            </MapView>
          }
        </View>
      </View>
    );


const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
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

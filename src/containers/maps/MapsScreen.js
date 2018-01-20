import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MapView, { PROVIDER_GOOGLE, MAP_TYPES } from 'react-native-maps';
import {Navigation} from 'react-native-navigation';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

const ASPECT_RATIO = width / height;
// const LATITUDE = 3.146642;
// const LONGITUDE = 101.695845;
// const LATITUDE_DELTA = 0.08;
const LATITUDE = 15.764199;
const LONGITUDE = 77.475933;
const LATITUDE_DELTA = 0.4000;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//const LONGITUDE_DELTA = 0.0421;
const SPACE = 0.01;

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

class MapsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true,
    navBarTextFontFamily: 'Maven Pro',
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
        },
        {
          latitude: 15.941378,
          longitude: 77.425732,
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
      // this.map.animateToBearing({
      //   return (Math.random() * (max - min)) + min
      // });

    }.bind(this), 7000);

    setTimeout(function () {
      this.setState({
        coordinate: new MapView.AnimatedRegion({
          latitude: LATITUDE - SPACE,
          longitude: LONGITUDE - SPACE,
        }),
        rotation: 186
      });

      this.state.coordinate.timing({
        latitude: 15.941378,
        longitude: 77.425732,
        duration: 8000
      }).start();


      this.map.animateToRegion({
        latitude: 15.941378,
        longitude: 77.425732,
        latitudeDelta: 0.0100,
        longitudeDelta: LONGITUDE_DELTA,
      }, 3000);
     var max = 360;
     var min = -360;
      // this.map.animateToBearing({
      //   return (Math.random() * (max - min)) + min
      // });

    }.bind(this), 10000);
    //this.animate = this.animate.bind(this);
  }

  onNavigatorEvent(event) {
    if (event.id === 'bottomTabSelected') {
      //this.props.tabIndex = "screenInstanceID7";
    }
    if (event.id === 'bottomTabReselected') {
      //console.log('Tab reselected!');
    }
  }

  async componentWillMount() {
    const visibleScreenInstanceId = await Navigation.getCurrentlyVisibleScreenId();
    console.log(visibleScreenInstanceId);
   // Alert.alert(visibleScreenInstanceId);
  }

  componentDidMount() {
    if(this.props.tabIndex == 1) {
    this.map.animateToRegion({
      latitude: LATITUDE - (2 * SPACE),
      longitude: LONGITUDE - SPACE,
      latitudeDelta: 0.0275,
      longitudeDelta: 0.0275,
    }, 3000);
  }

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
      //AIzaSyCYTxilXEV9e0ZtoBbv2tl29_f42Dldbgs
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.region.latitude && this.props.tabIndex == "screenInstanceID7" &&
            <MapView
              ref={ref => { this.map = ref; }}
              // mapType={MAP_TYPES.TERRAIN}
              //onLayout={() => this.map.animateToBearing(25)}
              provider={MapView.PROVIDER_GOOGLE}
              style={styles.map}
              // showsCompass={true}
              // showsScale={true}
              // loadingEnabled
              // loadingIndicatorColor="#666666"
              // loadingBackgroundColor="#eeeeee"
              // showsBuildings
              initialRegion={{
                latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              customMapStyle={mapStyle}
              showsUserLocation ={true} 
              followsUserLocation = {true}
            >
            {/* <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={"AIzaSyCYTxilXEV9e0ZtoBbv2tl29_f42Dldbgs"}
  /> */}
              <MapView.Polyline
                coordinates={polyline}
                strokeColor="#000"
                // strokeColor="rgba(0,0,200,0.5)"
                strokeWidth={3}
              >

              </MapView.Polyline>
              <MapView.Marker.Animated
                coordinate={this.state.coordinate}
                centerOffset={{ x: -18, y: -60 }}
                anchor={{ x: 0.69, y: 1 }}
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

export default connect(mapStateToProps)(MapsScreen);


  // animate(region) {

  //   this.setState({
  //     coordinate: new MapView.AnimatedRegion({
  //       latitude: LATITUDE - (2 * SPACE),
  //       longitude: LONGITUDE + (2 * SPACE),
  //     }),
  //   });

  //   this.state.polyline.forEach(function (polyline) {
  //     var region = {
  //       latitude: polyline.latitude,
  //       longitude: polyline.longitude
  //     }

  //     this.state.coordinate.timing({
  //       latitude: region.latitude,
  //       longitude: region.longitude,
  //       duration: 1000
  //     }).start();

  //     this.setState({
  //       coordinate: region
  //     });
  //   })
  // }




        // this.setState({
      //   latitude: 15.772551,
      //   longitude: 77.482360
      // });
      // var region = {
      //   latitude: LATITUDE + SPACE,
      //   longitude: LONGITUDE - SPACE,
      // };
      // this.animate(region);
      // polyLines.forEach(function(polyline) {
      //   this.setState({
      //     coordinate: new MapView.AnimatedRegion({
      //       latitude: polyline.latitude,
      //       longitude: polyline.longitude
      //     })
      //   });


      //   this.state.coordinate.timing({
      //     latitude: region.latitude,
      //     longitude: region.longitude,
      //     duration: 1000
      //   }).start();

      //   var region = {
      //     latitude: polyline.latitude,
      //     longitude: polyline.longitude
      //   }
        
      //   this.setState({
      //     coordinate: new MapView.AnimatedRegion({
      //       latitude: region.latitude,
      //       longitude: region.latitude,
      //     })
      //   });

      // });


      // setTimeout(function () {
        //   console.log("animate1");
        //   this.animate({
        //     latitude: LATITUDE + SPACE,
        //     longitude: LONGITUDE - SPACE,
        //   });
        //   console.log("animate2");
        //   this.animate({
        //     latitude: LATITUDE - (2 * SPACE),
        //     longitude: LONGITUDE + (2 * SPACE),
        //   });
        //   console.log("animate2");
        //   this.animate({
        //     latitude: LATITUDE - SPACE,
        //     longitude: LONGITUDE - SPACE,
        //   });
        //   this.animate({
        //     latitude: LATITUDE - (2 * SPACE),
        //     longitude: LONGITUDE - SPACE,
        //   });


        //   // polyLines.map((polyline) => {
        //   //   var region = {
        //   //     latitude: polyline.latitude,
        //   //     longitude: polyline.longitude
        //   //   }
        //   //   this.setState({
        //   //     coordinate: new MapView.AnimatedRegion({
        //   //       latitude: region.latitude,
        //   //       longitude: region.latitude,
        //   //     })
        //   //   });
        //   //   this.state.coordinate.timing({
        //   //     latitude: region.latitude,
        //   //     longitude: region.longitude,
        //   //     duration: 9000
        //   //   }).start();
        //   // });
        // }.bind(this), 5000);

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


//   const style = {
//     width: 50,
//     height: 52,
//     transform: [
//       { rotate: `${this.props.heading}deg` }
//     ]
// }

// <MapView.Marker
//       key='aircraft-marker'
//       anchor={{ x: 0.5, y: 0.5 }}
//       zIndex={this.props.zIndex}
//       coordinate={this.props.coordinate}>
//         <Animated.Image ref='image' style={style} source={aircraftImg} />
// </MapView.Marker>


<View>
<TouchableOpacity
  onPress={() => {
    this.props.navigator.push({
      screen: 'creddebApp.TruckDetailsScreen', // unique ID registered with Navigation.registerScreen
      title: "TruckDetails", // navigation bar title of the pushed screen (optional)
    })
  }
  }>
  <View style={[styles.list_info_area]}>
    <View style={styles.main_view}>
      <View style={{  width: '35%', flexDirection: 'row', marginLeft: width > 350 ? 0 : 30, }}>
      <Avatar
          small
          rounded
          source={require('../../assets/images/avatar-truck.png') }
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          avatarStyle={{borderRadius:8, height:50, width:50, borderColor: 'red' }}
          containerStyle={{borderColor: "red"}}
        />
      
      <View style={styles.inner_text_container}>
        <Text style={[styles.Upper_text, { fontFamily: 'Maven Pro', fontWeight: '600', color: '#5d798d' }]}>AP 31 BA 1234</Text>
      </View>
      </View>
      <View style={styles.distance_view}>
        <View style={[styles.distance_text, {position: 'relative', left: width > 350 ? 60 : 40}]}>
          {/* <Text style={{ fontSize: 13, color: palette.gray.text }}>Total Amount : </Text> */}
          {/* <Text style={{ fontSize: 13, color: palette.black.base }}>350 Km</Text> */}
          <View style={{marginRight: 0}}>
          <Icon
            name='map-marker'
            type='font-awesome'
            color='#c12222'
          />
          </View>
          <Text style={{ fontSize: 11, color: palette.black.base, textAlign: 'center' }}>350 Km</Text>
        </View>
        <View style={[styles.distance_text, {position: 'relative', left: 40, marginRight: 20}]}>
          <Icon
            name='history'
            type='font-awesome'
            color='#efd723'
          />
          <Text style={{ fontSize: 11, color: palette.black.base, textAlign: 'center' }}>History</Text>
        </View>
        </View>
        <View style={{ marginLeft: 4 }}></View>
      
    </View>


  </View>
</TouchableOpacity>
<Divider style={{ backgroundColor: palette.gray.light, width: '95%', marginLeft: 10 }} />
</View>













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
import { Navigation } from 'react-native-navigation';
import MapViewDirections from 'react-native-maps-directions';
import Polyline from '@mapbox/polyline';

const { width, height } = Dimensions.get('window');
const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';

const ASPECT_RATIO = width / height;
// const LATITUDE = 3.146642;
// const LONGITUDE = 101.695845;
// const LATITUDE_DELTA = 0.08;
const LATITUDE = 15.764199;
const LONGITUDE = 77.475933;
const LATITUDE_DELTA = 0.3938158798959961;
//const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LONGITUDE_DELTA = 0.6100520119070865;
const SPACE = 0.01;

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

class MapsScreen extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired
  }

  static navigatorStyle = {
    navBarTitleTextCentered: true,
    navBarTextFontFamily: 'Maven Pro',
    //navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: '#000000',
    statusBarTextColorScheme: 'dark'
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
        // {
        //   latitude: LATITUDE + SPACE,
        //   longitude: LONGITUDE - SPACE,
        // },
        // {
        //   latitude: LATITUDE - (2 * SPACE),
        //   longitude: LONGITUDE + (2 * SPACE),
        // },
        // {
        //   latitude: LATITUDE - SPACE,
        //   longitude: LONGITUDE - SPACE,
        // },
        // {
        //   latitude: LATITUDE - (2 * SPACE),
        //   longitude: LONGITUDE - SPACE,
        // },
        // {
        //   latitude: 15.941378,
        //   longitude: 77.425732,
        // }
      ],

      mapStyle: [
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
          "featureType": "poi.government",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#00ee26"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "on"
            },
            {
              "weight": 4
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#757575"
            },
            {
              "visibility": "simplified"
            },
            {
              "weight": 7
            }
          ]
        },
        {
          "featureType": "poi.government",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#38287a"
            },
            {
              "visibility": "on"
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
          "featureType": "poi.place_of_worship",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ff9500"
            },
            {
              "visibility": "simplified"
            },
            {
              "weight": 1
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#00ee26"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "labels.icon",
          "stylers": [
            {
              "saturation": 85
            },
            {
              "visibility": "on"
            },
            {
              "weight": 5
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#fc6509"
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#eaea00"
            },
            {
              "saturation": 95
            },
            {
              "visibility": "off"
            },
            {
              "weight": 3
            }
          ]
        },
        {
          "featureType": "poi.place_of_worship",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "saturation": 100
            },
            {
              "visibility": "on"
            },
            {
              "weight": 4.5
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
          "stylers": [
            {
              "visibility": "on"
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
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#3d7727"
            },
            {
              "visibility": "on"
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
    //Alert.alert("efgr");
    // Alert.alert(visibleScreenInstanceId);
  }

  async componentDidMount() {

    let resp = await fetch("https://maps.googleapis.com/maps/api/directions/json?origin=17.397635,78.375823&destination=17.434390,78.386753&key=AIzaSyAfh3b2zx-_rBD3DeQpD0bnYgbkS6nT2a0")
    let respJson = await resp.json();
    let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
    let coords = points.map((point, index) => {
      return {
        latitude: point[0],
        longitude: point[1]
      }
    })
    this.setState({ polyline: coords })


    // if (this.props.tabIndex == 1) {
    //   this.map.animateToRegion({
    //     latitude: LATITUDE - (2 * SPACE),
    //     longitude: LONGITUDE - SPACE,
    //     latitudeDelta: 0.0275,
    //     longitudeDelta: 0.0275,
    //   }, 3000);
    // }

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
    const imageUrl = IOS ? require('../../assets/images/movingtruck.png') : require('../../assets/images/movingtruck.png')
    return (
      //AIzaSyCYTxilXEV9e0ZtoBbv2tl29_f42Dldbgs
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.state.region.latitude &&
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
                latitude: 17.397635,
                longitude: 78.375823,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              customMapStyle={this.state.mapStyle}
              showsUserLocation={true}
              followsUserLocation={true}
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
              // image={imageUrl}
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

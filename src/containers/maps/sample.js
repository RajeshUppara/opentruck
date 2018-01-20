
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
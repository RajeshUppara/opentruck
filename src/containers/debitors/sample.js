
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
// componentDidMount () {
//   this.spin()
// }

// spin() {
//   this.spinValue.setValue(0);
//   Animated.timing(
//     this.spinValue,
//     {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear
//     }
//   ).start(() => {})
// }

// render () {
//   const spin = this.spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg']
//   })
//   return (
//     <View style={styles.container}>
//       <Animated.Image
//         style={{
//           width: 227,
//           height: 200,
//           transform: [{rotate: spin}] }}
//           source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
//       />
//     </View>
//   )
// }
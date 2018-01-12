import React from 'react';
import Spinner from 'react-native-spinkit';

class SpinlitLoader extends React.Component {
  render() {
    return (
      <div>
        <Spinner
          name="circle"
          color= 'black'
          style={{ width: '50px', height: '50px' }} />
      </div>
    )
  }
};

export default SpinlitLoader;
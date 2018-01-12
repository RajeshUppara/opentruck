import React from 'react';
//import Svg, {Path} from react-native-svg;
import iconPaths from './fonticons';
import PropTypes from 'prop-types';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);
  if (icon) {
    return icon.icon.paths.join(' ');
  } else {
    return '';
  }
}

const Icon = (props) => (
  <svg width={props.width} height={props.height} viewBox="0 0 1024 1024">
    <path d={getPath(props.icon)} fill={props.color}></path>
  </svg>

  // <Svg
  //   height={props.height}
  //   width={props.width}
  // >
  //   <Path
  //     d={getPath(props.icon)}
  //     fill={props.color}
  //   />
  // </Svg>

);

// Icon.propTypes = {
//   icon: PropTypes.string.isRequired,
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired
// };

export default Icon;
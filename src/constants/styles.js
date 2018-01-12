// TODO: restructure constants folder/files
import {
  Platform,
  Dimensions
} from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
//import icoMoonConfig from './fonticons.json';

const {width} = Dimensions.get('window');

export const fonts = {
  proxima: {
    semibold: (Platform.OS === 'ios') ? 'ProximaNova-Semibold' : 'proximanova_semibold',
    regular: (Platform.OS === 'ios') ? 'ProximaNova-Regular' : 'proximanova_regular'
  }
};

export const palette = {
  black: {
    base: '#313233'
  },
  blue: {
    base: '#0067AC',
    dark: '#005d9b',
    light: '#00b5cc',
    accent: '#024e7f'
  },
  purple: {
    base: '#702779'
  },
  white: {
    base: 'white'
  },
  gray: {
    dark: '#616365',
    light: '#ebebeb',
    accent: '#f9f9f9',
    bg: '#e6e6e6',
    border: '#bdbdbd',
    text: '#546979'
  },
  green: {
    base: '#8cc63f',
    dark: '#4A7729'
  },
  red: {
    base: '#e03333'
  },
  yellow: {
    base: '#fDB913'
  }
};

//export const Icon = createIconSetFromIcoMoon(icoMoonConfig);

// Will return value given if width is greater than breakpoint provided

// @param breakPoint {string} Breakpoint to check against
// @param percent {number} Percentage of total width desired
// Example:  paddingHorizontal: breakPointPercentage('tablet', 5) || 20
export function breakPointPercentage(breakpoint, percent) {
  switch(breakpoint){
  case 'tablet':
    return width > 480 ? (percent / 100) * width : null;
  default:
    return null;
  }
}

// @param breakPoint {string} Breakpoint to check against
// @para value {number} Value to return if breakpoint is true
export function breakPoint(breakpoint, value) {
  switch(breakpoint){
  case 'tablet':
    return width > 480 ? value : null;
  default:
    return null;
  }
}

export function androidTabBarPadding() {
  return Platform.OS === 'ios' ? null : {paddingBottom: 60};
}

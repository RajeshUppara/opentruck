import { AsyncStorage } from 'react-native';
import { API, ENDPOINT } from '../../constants/api';
import request from 'superagent';
import {Linking, Platform} from 'react-native';

// Calculates maxDiscount based on BCC gasMaxDiscount property
// @param maxDiscout {number}
// @param rate {number}
// @param quantity {number}
export function calculateMaxDiscount(maxDiscount, rate, quantity) {
  let max = maxDiscount === 0 ? 99999999999 : maxDiscount;
  let discount = (max / rate) * quantity;
  return discount;
}

// Helper function to find objects based on an array of keywords
// @param words {array} array of words to search against
export function findWords(words) {
  return {
    butOnlyOn: (properties) => (item) => (
      Object.keys(item).some(key => (
        properties.indexOf(key) >= 0 && words.some(word => item[key].toLowerCase().indexOf(word.toLowerCase()) >= 0))
      )
    )
  };
}

// Searches an array based on given parameters
// @param keyword {string} keyword to compare against
// @param arr {array} array of objects to search through
// @param comparators {array} array of strings to use as properties to include in search
export function searchArray(keyword, arr = [], comparators) {
  keyword = keyword.split(' ');
  return arr.filter(findWords(keyword).butOnlyOn(comparators));
}

// Sorts an array based on given parameters
// TODO: This is specific to coupons sorting, might want to think about writing
// a fully universal sort expression.
export function sortArray(comparator, arr) {
  let result = arr;
  let val = 'id';

  // 0: Expiration Date
  // 1: -Price
  // 2: Price
  // 3: Name (Brand)
  // 4: Default (Recommended)

  switch(comparator) {
  case 0:
    val = 'expirationDate';
    return result.sort((a,b) => {
      return (a[val].toLowerCase() > b[val].toLowerCase()) ? 1 : -1;
    });
  case 1:
    val = 'price';
    return result.sort((a,b) => {
      return (a[val] > b[val]) ? 1 : -1;
    });
  case 2:
    val = 'price';
    return result.sort((a,b) => {
      return (a[val] < b[val]) ? 1 : -1;
    });
  case 3:
    val = 'name';
    return result.sort((a,b) => {
      return (a[val].toLowerCase() > b[val].toLowerCase()) ? 1 : -1;
    });
  case 4:
    return result;
  default:
    return result;
  }
}

/**
  * Formats a phone number into (XXX) XXX-XXXX format
  * @param {string} s - 10 digit phone number string to format
  */
export function formatPhoneNumber(s) {
  let s2 = (''+s).replace(/\D/g, '');
  let m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
}

/**
  * Return bool for email validated query
  * @param {string} query - String to be validated
  */
export function validateEmail(query) {
  let email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return email.test(query);
}

/**
  * Validates uniqueness of email on server
  * @param {string} query - Email address to validate
  */
export function validateEmailFromServer(query) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      let url = API.BASE_URL + ENDPOINT.VALIDATE_EMAIL + encodeURIComponent(query);

      request
        .get(url)
        .set('Authorization' , 'Bearer ' + user.access_token)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          console.log(res.body);
          if(res.ok) {
            resolve(res);
          } else {
            reject(err);
          }
        });
    });
  });
}

/**
  * Validates uniqueness of phone on server
  * @param {string} query - Phone Number to validate
  */
export function validatePhoneFromServer(query) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      let url = API.BASE_URL + ENDPOINT.VALIDATE_PHONE + encodeURIComponent(query);

      request
        .get(url)
        .set('Authorization' , 'Bearer ' + user.access_token)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if(res.ok) {
            resolve(res);
          } else {
            reject(err);
          }
        });
    });
  });
}

/**
  * Validates uniqueness of Legacy username (non email) on server
  * @param {string} query - Username to validate
  */
export function validateLoginFromServer(query) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      let url = API.BASE_URL + ENDPOINT.VALIDATE_LOGIN + encodeURIComponent(query);

      request
        .get(url)
        .set('Authorization' , 'Bearer ' + user.access_token)
        .set('Content-Type', 'application/json')
        .end((err, res) => {
          if(res.ok) {
            resolve(res);
          } else {
            reject(err);
          }
        });
    });
  });
}
/**
  * Opens external application if installed, or falls back to an app/play store link
  * @param {string} app - App Scheme to open, example: 'peapod://'
  * @param {string} fallbackIOS - Appstore fallback link
  * @param {string} fallbackAndroid - Play store fallback link
  */
export function linkExternalApp(app, fallbackIOS, fallbackAndroid) {
  Linking.canOpenURL(app).then(supported => {
    if (supported) {
      Linking.openURL(app);
    } else {
      if(Platform.OS === 'ios') {
        Linking.openURL(fallbackIOS);
      } else {
        Linking.openURL(fallbackAndroid);
      }
    }
  }).catch(err => {
    console.error('Unknown error occurred', err);
  });
}

/**
  * Formats a string of 24hr time (22:00) to 12hr time (10:00P)
  * @param {string} time - a 24hr time format to be converted into 12hr format
  */
export function formatTime(time) {
  if( time ) {
    let splitTime = time.split(/:/);
    let hh = splitTime[0];
    let mm = splitTime[1];
    let hhInt = parseInt(hh);

    if( hhInt < 12 && hhInt > 0 ){
      time = hhInt + ':' + mm + 'A' ;
      return time;
    }

    if( hhInt === 12 ) {
      time = hhInt + ':' + mm + 'P';
      return time;
    }

    if( hh === '00' ) {
      time = '1:' + mm + 'A';
      return time;
    }

    if( hhInt > 12 ) {
      time = hhInt - 12 + ':' + mm + 'P';
      return time;
    }

  } else {
    return 'Midnight';
  }
}

// Date formatting tool

// Input Variables
// @param date {string} date to be formatted passed into to function

// @param ordin {string} order of incoming (unformatted) date elements
// Example: 1984-09-19 or 09-19-1984

// @param sepin {string} seperator between dates for unformatted date
// Example: "-" or "/" such as 1984-09-19 or 09/19/1984

// @param ordout {string} order of formatted date elements being returned
// Example: 1984-09-19 or 09-19-1984

// @param sepout {string} seperator between dates for date being returned
// Example: "-" or "/" such as 1984-09-19 or 09/19/1984

export function dateFormatter(date, ordin, sepin, ordout, sepout) {

  const monthNames = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Aug',
    'Oct',
    'Nov',
    'Dec'
  ];

  if (sepin == 'undefined' || sepin == null || sepin == '') {
    if (ordin === 'ydm') {
      let sepin = date.indexOf(4);
    }
    if (ordin === 'mdy') {
      let sepin = date.indexOf(2);
    }
  } else {
    let sepin = '-';
  }

  let dateElement = date.split(sepin);
  let orderOut = ordout.split('');
  let orderIn = ordin.split('');
  let sort = [];

  if (orderOut[0] === orderIn[0]) {
    sort[0] = 0;
  } else if (orderOut[0] === orderIn[1]) {
    sort[0] = 1;
  } else if (orderOut[0] === orderIn[2]) {
    sort[0] = 2;
  }

  if (orderOut[1] === orderIn[0]) {
    sort[1] = 0;
  } else if (orderOut[1] === orderIn[1]) {
    sort[1] = 1;
  } else if (orderOut[1] === orderIn[2]) {
    sort[1] = 2;
  }

  if (orderOut[2] === orderIn[0]) {
    sort[2] = 0;
  } else if (orderOut[2] === orderIn[1]) {
    sort[2] = 1;
  } else if (orderOut[2] === orderIn[2]) {
    sort[2] = 2;
  }

  let dateFormatted = dateElement[sort[0]] + sepout + dateElement[sort[1]] + sepout + dateElement[sort[2]];

  return dateFormatted;
}

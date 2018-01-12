import {AsyncStorage} from 'react-native';
import {API, ENDPOINT} from '../../constants/api';
import * as appActions from '../app/actions';
import request from 'superagent';

// Action Types

export const types = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_GUEST_SUCCESS: 'LOGIN_GUEST_SUCCESS',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  SET_BCC_PROPERTIES: 'SET_BCC_PROPERTIES'
};

// Actions

export function loginError() {
  return {
    type: types.LOGIN_ERROR,
    error: true,
    loggedIn: false
  };
}

export function loginSuccess(profile) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_SUCCESS,
      profile,
      loggedIn: true
    });
    // Now that we've stored our user information in our reducer store,
    // We can update the app route (redux/app/actions)
    dispatch(appActions.login());
  };
}

export function loginLoading(loading) {
  return {
    type: types.LOGIN_LOADING,
    loading
  };
}

export function loginGuestSuccess() {
  return dispatch => {
    dispatch({
      type: types.LOGIN_GUEST_SUCCESS,
      guest: true,
      loggedIn: true
    });
    dispatch(appActions.login());
  };
}

export function logoutSuccess() {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_SUCCESS,
      profile: [],
      loggedIn: false
    });
    dispatch(appActions.logout());
  };
}

export function setBccProperties(properties) {
  return {
    type: types.SET_BCC_PROPERTIES,
    properties
  };
}

// Action Creators

// Request user tokens via the grant_type: 'code' method
export function requestUser(code) {
  return dispatch => {

    dispatch(loginLoading(true));

    let url = API.BASE_URL + ENDPOINT.TOKEN;

    request
      .post(url)
      .set('Authorization', API.BASIC_AUTH)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', '*/*')
      .send({grant_type:'authorization_code', code, client_id: API.CLIENT_ID, redirect_uri: API.BASE_URL})
      .end(function(err, res){
        if(err) {
          dispatch(loginError(err));
        } else {
          // Store user tokens in AsyncStorage so we have access on future sessions
          AsyncStorage.setItem('user', JSON.stringify(res.body))
          .then(() => {
            // Now that we have our tokens, lets get the user profile data
            dispatch(requestProfile());
          });
        }
      });
  };
}

// Request user profile data
export function requestProfile() {
  return dispatch => {
    AsyncStorage.getItem('user')
      .then(user => {
        user = JSON.parse(user);
        let url = API.BASE_URL + ENDPOINT.PROFILE;

        request
          .get(url)
          .set('Authorization', 'Bearer ' + user.access_token)
          .end((err,res) => {
            if(err) {
              // Set error
              dispatch(loginError(err));
            } else {
              let profile = res.body;
              AsyncStorage.mergeItem('user', JSON.stringify({profile}))
                .then(() => {
                  // Now that we have profile data, we need to populate all of the
                  // BCC variables. So let's request it
                  dispatch(requestBCCVars(user, profile, false));
                });
            }
          });
      });
  };
}

// Request BCC site variables
export function requestBCCVars(user, profile, guest) {
  return dispatch => {
    let url = API.BASE_URL + ENDPOINT.BCC_PROPERTIES;

    request
      .get(url)
      .set('Authorization', 'Bearer ' + user.access_token)
      .set('Accept', 'application/json')
      .end((err,res) => {
        if(err) {
          // Set error
          dispatch(loginError(err));
        } else {
          // Set the bcc properties in our user reducer
          dispatch(setBccProperties(res.body));

          // Finally, we can login
          if(guest) {
            dispatch(loginGuestSuccess());
          } else {
            dispatch(loginSuccess(profile));
          }
        }
        dispatch(loginLoading(false));
      });
  };
}

export function requestUserGuest() {
  return dispatch => {

    dispatch(loginLoading(true));

    let url = API.BASE_URL + ENDPOINT.TOKEN;

    request
      .post(url)
      .set('Authorization', API.BASIC_AUTH)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', '*/*')
      .send({ grant_type:'client_credentials' })
      .end(function(err, res){
        if(err) {
          dispatch(loginError(err));
        } else {
          let response = res.body;
          // add guest flag to token obj
          let guestFlag = Object.assign({}, response, {
            guest: true
          });
          AsyncStorage.mergeItem('user', JSON.stringify(guestFlag))
          .then(() => {
            dispatch(requestBCCVars(guestFlag, null, true));
          });
        }
      });
  };
}

// TODO: handle error
export function requestAnonymousUser() {
  return dispatch => {
    let url = API.BASE_URL + ENDPOINT.TOKEN;

    request
      .post(url)
      .set('Authorization', API.BASIC_AUTH)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', '*/*')
      .send({ grant_type:'client_credentials' })
      .end(function(err, res){
        if(err) {
          dispatch(loginError());
        } else {
          AsyncStorage.setItem('user', JSON.stringify(res.body));
        }
      });
  };
}

export function requestLogout() {
  return dispatch => {

    dispatch(loginLoading(true));

    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      let url = API.BASE_URL + ENDPOINT.LOGOUT + user.profile.card_number;
      request
        .get(url)
        .set('Authorization', 'Bearer ' + user.access_token)
        .end(() => {
          dispatch(logOut());
        });
    }).catch(() => {
      dispatch(logOut());
    });
  };
}

export function logOut() {
  return dispatch => {
    // Reset User AsyncStorage
    let resetUser = JSON.stringify({access_token: null, refresh_token: null, guest: false, profile: []});
    AsyncStorage.setItem('user', resetUser).then(() => {
      dispatch(logoutSuccess());
      dispatch(loginLoading(false));
    });
  };
}

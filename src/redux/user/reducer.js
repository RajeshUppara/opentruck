import {types} from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  profile: [],
  loggedIn: false,
  loading: false,
  error: false,
  guest: false
});

export default function user(state = initialState, action = {}) {
  switch(action.type) {
  case types.LOGIN_SUCCESS:
    return Object.assign({}, state, {
      profile: action.profile,
      loggedIn: action.loggedIn
    });
  case types.LOGIN_GUEST_SUCCESS:
    return Object.assign({}, state, {
      loggedIn: action.loggedIn,
      guest: action.guest
    });
  case types.LOGIN_ERROR:
    return Object.assign({}, state, {
      error: action.error,
      loggedIn: action.loggedIn
    });
  case types.LOGIN_LOADING:
    return Object.assign({}, state, {
      loading: action.loading
    });
  case types.SET_BCC_PROPERTIES:
    return Object.assign({}, state, {
      properties: action.properties
    });
  case types.LOGOUT_SUCCESS:
    return Object.assign({}, state, {
      profile: action.profile,
      loggedIn: action.loggedIn,
      guest: false
    });
  default:
    return state;
  }
}

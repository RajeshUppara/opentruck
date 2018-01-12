import {types} from './actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: undefined // 'login' / 'after-login'
});

export default function app(state = initialState, action = {}) {
  switch (action.type) {
  case types.ROOT_CHANGED:
    return {
      root: action.root,
      properties: state.properties
    };
  case types.SET_APP_PROPERTIES:
    return{
      root: state.root,
      properties: action.properties
    };
  default:
    return state;
  }
}

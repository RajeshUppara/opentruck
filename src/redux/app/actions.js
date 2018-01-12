export const types = {
  INITIALIZED: 'INITIALIZED',
  ROOT_CHANGED: 'ROOT_CHANGED',
  SET_APP_PROPERTIES: 'SET_APP_PROPERTIES'
};

export function appInitialized() {
  return async function(dispatch) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('home'));
  };
}

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root
  };
}

export function propertyInjection(properties) {
  return dispatch => {
    dispatch({
      type: types.SET_APP_PROPERTIES,
      properties
    });
  };
}

export function login() {
  return async function(dispatch) {
    dispatch(changeAppRoot('loggedIn'));
  };
}

export function logout() {
  return async function(dispatch) {
    dispatch(changeAppRoot('init'));
  };
}

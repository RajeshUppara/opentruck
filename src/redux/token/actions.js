import { AsyncStorage } from 'react-native';
import { API, ENDPOINT } from '../../constants/api';
import request from 'superagent';

// Executes a GET request to the most simple endpoint /mobile/properties which can be used to
// retrieve the app version from the server as well as a forceUpdate flag if needed
export function tryToken() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      if(user.access_token) {
        let url = API.BASE_URL + ENDPOINT.PROPERTIES;

        request
          .get(url)
          .set('Authorization', 'Bearer ' + user.access_token)
          .end((err) => {
            return err ? reject(err) : resolve(true);
          });
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}

// Executes a POST to /oauth/token endpoint to refresh token using given refresh_token from
// the user object in AsyncStorage
export function refreshToken() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('user').then(user => {
      user = JSON.parse(user);
      let url = API.BASE_URL + ENDPOINT.TOKEN;

      request
        .post(url)
        .set('Authorization', API.BASIC_AUTH)
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', '*/*')
        .send({grant_type:'refresh_token', refresh_token: user.refresh_token})
        .end((err, res) => {
          if(err || !res.ok) {
            reject(err);
          } else {
            AsyncStorage.mergeItem('user', JSON.stringify(res.body)).then(() => {
              resolve(true);
            });
          }
        });
    })
    .catch(err => {
      reject(err);
    });
  });
}

// Use isValidToken to verify an access token
// Use for app launch, app resume and when requests result in 401 to refresh the token.
export async function isValidToken() {
  try {
    const validToken = await tryToken();
    return validToken;
  } catch(err) {
    console.log(err); // TODO: Handle logging
    return isValidRefreshToken();
  }
}

export async function isValidRefreshToken() {
  try {
    const createValidToken = await refreshToken();
    return createValidToken;
  } catch(err) {
    console.log(err); // TODO: Handle logging
    return false;
  }
}

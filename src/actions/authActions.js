import { AsyncStorage } from 'react-native'
import startApi from './api'
import { SET_TOKEN, SET_BADLOGIN } from './types'

const API = startApi();

export const signIn = (email, password, callBack) => dispatch => {
  API.post('/login', {
    email,
    password
  }).then(response => {
    AsyncStorage.setItem('userToken', response.token);
    dispatch({
      type: SET_TOKEN,
      payload: {
        token: response.token,
        badLogin: false
      }
    })
    console.log(response.token);
    callBack();
  }).catch(error => {
    console.log(error)
    dispatch({
      type: SET_BADLOGIN,
      payload: true
    })
  })
}
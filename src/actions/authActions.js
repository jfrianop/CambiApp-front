import { AsyncStorage } from 'react-native'
import startApi from './api'
import { SET_TOKEN, SET_BADLOGIN, SET_BADREGISTER } from './types'

const API = startApi();

export const signIn = (email, password, callBack) => dispatch => {
  API.post('/login', {
    email,
    password
  }).then(({ data }) => {
    AsyncStorage.setItem('userToken', data.token);
    dispatch({
      type: SET_TOKEN,
      payload: data.token,
    })
    dispatch({
      type: SET_BADLOGIN,
      payload: false
    })
    callBack();
  }).catch(error => {
    console.log(error)
    dispatch({
      type: SET_BADLOGIN,
      payload: true
    })
  })
}

export const register = (email, password, callBack) => dispatch => {
  API.post('/register', {
    email,
    password
  }).then(response => {
    AsyncStorage.setItem('userToken', response.token);
    dispatch({
      type: SET_TOKEN,
      payload: response.token
    })
    dispatch({
      type: SET_BADREGISTER,
      payload: false
    })
    callBack();
  }).catch(error => {
    console.log(error)
    dispatch({
      type: SET_BADREGISTER,
      payload: true
    })
  })
}
import startApi from './api'
import { SET_ITEMS } from './types'

export const getItems = (token) => dispatch => {
  const API = startApi(token);
  console.log(token);
  API.get('/items').then(({ data }) => {
    dispatch({
      type: SET_ITEMS,
      payload: data,
    })
  }).catch(error => {
    console.log(error)
  })
}

export const postItem = (token, newItem) => dispatch => {
  const API = startApi(token);
  console.log("Posting Item wiith Token: ", token);
  API.post('/items', newItem).then(({ data }) => {
    dispatch({
      type: SET_ITEMS,
      payload: data,
    })
  }).catch(error => {
    console.log(error)
  })
}
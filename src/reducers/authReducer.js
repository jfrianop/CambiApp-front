import { SET_TOKEN, SET_BADLOGIN } from '../actions/types';

const initialState = {
  token: "",
  badLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload.token, badLogin: action.payload.badLogin };
    case SET_BADLOGIN:
      return { ...state, badLogin: action.payload }
    default:
      return state;
  }
}
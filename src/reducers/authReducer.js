import { SET_TOKEN, SET_BADLOGIN, SET_BADREGISTER } from '../actions/types';

const initialState = {
  token: "",
  badLogin: false,
  badRegister: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_BADLOGIN:
      return { ...state, badLogin: action.payload };
    case SET_BADREGISTER:
      return { ...state, badRegister: action.payload };
    default:
      return state;
  }
}
import { SET_ITEMS } from '../actions/types';

const initialState = {
  itemList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      console.log("Reducer log", action);
      return { ...state, itemList: action.payload };
    default:
      return state;
  }
}
import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import ItemReducer from './itemReducer';

export default combineReducers({
  auth: AuthReducer,
  items: ItemReducer
});
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import eventReducer from './eventReducer';


const indexReducer = combineReducers({
  userReducer,
  eventReducer,
});

export default indexReducer;
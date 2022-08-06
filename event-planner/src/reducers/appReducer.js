import { combineReducers } from 'redux';

import userReducer from './userReducer';
import eventReducer from './eventReducer';
import inviteReducer from './inviteReducer';


const indexReducer = combineReducers({
  userReducer,
  eventReducer,
  inviteReducer,
});

export default indexReducer;
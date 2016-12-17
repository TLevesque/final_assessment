import { combineReducers } from "redux";

import events from './fetchReducer';

// Combining both reducers
export default combineReducers({
  events,
});

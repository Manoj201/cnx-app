// @flow

import { combineReducers } from "redux";

import PartReducer from "../modules/part/reducers/Part.reducer";

export default combineReducers({
  partState: PartReducer,
});

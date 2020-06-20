// @flow

import { createReducer } from "reduxsauce";

import {
  GET_PART_LIST,
  GET_PART_LIST_SUCCESS,
  GET_PART_LIST_FAILURE,
} from "../actions/Types";

export const INITIAL_STATE = {
  partList: [],
  partListLoading: false,
  partListError: null,
};

export const getPartList = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => ({
  ...state,
  partListLoading: true,
  partListError: null,
});

export const getPartListSuccess = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => ({
  ...state,
  partList: payload.data,
  partListLoading: false,
  partListError: null,
});

export const getPartListFailure = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => ({
  ...state,
  partListError: payload.error,
  partListLoading: false,
});

const ACTION_HANDLERS = {
  [GET_PART_LIST]: getPartList,
  [GET_PART_LIST_SUCCESS]: getPartListSuccess,
  [GET_PART_LIST_FAILURE]: getPartListFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

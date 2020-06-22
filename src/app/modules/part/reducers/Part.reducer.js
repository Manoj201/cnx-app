// @flow

import { createReducer } from "reduxsauce";

import {
  GET_PART_LIST,
  GET_PART_LIST_SUCCESS,
  GET_PART_LIST_FAILURE,
  ADD_EDIT_PART,
  ADD_EDIT_PART_SUCCESS,
  ADD_EDIT_PART_FAILURE,
} from "../actions/Types";

export const INITIAL_STATE = {
  partList: [],
  partListLoading: false,
  partListError: null,

  addEditPartLoading: false,
  addEditPartError: null,
  newPartList: [],
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

export const addEditPart = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => ({
  ...state,
  addEditPartLoading: true,
  addEditPartError: null,
});

export const addEditPartSuccess = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => {
  const copyOfNewList = state.newPartList;
  const { part } = payload.data;
  copyOfNewList.push(part);
  return {
    ...state,
    addEditPartLoading: false,
    addEditPartError: null,
    newPartList: copyOfNewList,
  };
};

export const addEditPartFailure = (
  state: Object = INITIAL_STATE,
  { payload }: any
) => ({
  ...state,
  addEditPartError: payload.error,
  addEditPartLoading: false,
});

const ACTION_HANDLERS = {
  [GET_PART_LIST]: getPartList,
  [GET_PART_LIST_SUCCESS]: getPartListSuccess,
  [GET_PART_LIST_FAILURE]: getPartListFailure,

  [ADD_EDIT_PART]: addEditPart,
  [ADD_EDIT_PART_SUCCESS]: addEditPartSuccess,
  [ADD_EDIT_PART_FAILURE]: addEditPartFailure,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

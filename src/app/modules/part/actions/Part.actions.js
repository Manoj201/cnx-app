// @flow

import {
  GET_PART_LIST,
  GET_PART_LIST_SUCCESS,
  GET_PART_LIST_FAILURE,
  ADD_EDIT_PART,
  ADD_EDIT_PART_SUCCESS,
  ADD_EDIT_PART_FAILURE,
} from "./Types";

const getPartList = (): Object => ({
  type: GET_PART_LIST,
  payload: {},
});

const getPartListSuccess = (data: Object): Object => ({
  type: GET_PART_LIST_SUCCESS,
  payload: { data },
});

const getPartListFailure = (error: Object): Object => ({
  type: GET_PART_LIST_FAILURE,
  payload: { error },
});

const addEditPart = (data: Object): Object => ({
  type: ADD_EDIT_PART,
  payload: { data },
});

const addEditPartSuccess = (data: Object): Object => ({
  type: ADD_EDIT_PART_SUCCESS,
  payload: { data },
});

const addEditPartFailure = (error: Object): Object => ({
  type: ADD_EDIT_PART_FAILURE,
  payload: { error },
});

export default {
  getPartList,
  getPartListSuccess,
  getPartListFailure,

  addEditPart,
  addEditPartSuccess,
  addEditPartFailure,
};

// @flow

import {
  GET_PART_LIST,
  GET_PART_LIST_SUCCESS,
  GET_PART_LIST_FAILURE,
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

export default {
  getPartList,
  getPartListSuccess,
  getPartListFailure,
};

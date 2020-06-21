// @flow

import { takeLatest, call, put } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import Actions from "../actions/Part.actions";
import PartApiService from "../../../api/Part.service";

import { GET_PART_LIST } from "../actions/Types";

export default () => {
  function* getPartList({ payload }) {
    try {
      const response = yield call(PartApiService.getPartList);
      yield put(Actions.getPartListSuccess(response));
    } catch (error) {
      yield put(Actions.getPartListFailure(error));
    }
  }

  function* watchGetPartList(): Saga<void> {
    yield takeLatest(GET_PART_LIST, getPartList);
  }

  return {
    watchGetPartList,
  };
};

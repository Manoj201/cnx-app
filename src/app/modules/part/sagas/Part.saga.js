// @flow

import { takeLatest, call, put } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import Actions from "app/modules/part/actions/Part.actions";
import PartApiService from "app/api/Part.service";

import { GET_PART_LIST, ADD_EDIT_PART } from "app/modules/part/actions/Types";

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

  function* addEditPart({ payload }) {
    try {
      const response = yield call(PartApiService.addEditPart, payload.data);
      yield put(Actions.addEditPartSuccess(response));
    } catch (error) {
      yield put(Actions.addEditPartFailure(error));
    }
  }

  function* watchAddEditPart(): Saga<void> {
    yield takeLatest(ADD_EDIT_PART, addEditPart);
  }
  return {
    watchGetPartList,
    watchAddEditPart,
  };
};

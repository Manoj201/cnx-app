// @flow

import { all, fork } from "redux-saga/effects";
import type { Saga } from "redux-saga";

import PartSaga from "app/modules/part/sagas/Part.saga";

export default function* root(): Saga<void> {
  const createdPartSaga = PartSaga();

  yield all([
    fork(createdPartSaga.watchGetPartList),
    fork(createdPartSaga.watchAddEditPart),
  ]);
}

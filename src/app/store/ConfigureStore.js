// @flow
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./Reducers";
import sagas from "./Sagas";

export default function configureStore(
  reactotroneStoreActions: any,
  INITIAL_STATE: any = {}
) {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);

  const store = (reactotroneStoreActions || createStore)(
    reducers,
    INITIAL_STATE,
    applyMiddleware(...middleware)
  );
  sagaMiddleware.run(sagas);

  return store;
}

import { Store, createStore, applyMiddleware } from "@reduxjs/toolkit";
import CreateSagaMiddleware from 'redux-saga';

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { CarState } from "./ducks/cars/types";

export interface ApplicationState {
  cars: CarState;
}

const sagaMiddleware = CreateSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
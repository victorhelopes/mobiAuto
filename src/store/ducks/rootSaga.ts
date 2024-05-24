import { all, takeLatest } from 'redux-saga/effects'

import { CarsTypes } from './cars/types'
import { loadBrandsRequest, loadModelsRequest } from './cars/sagas';

export default function* rootSaga(): Generator{
    return yield all([
        takeLatest(CarsTypes.LOAD_BRANDS_REQUEST, loadBrandsRequest),
        takeLatest(CarsTypes.LOAD_MODELS_REQUEST, loadModelsRequest),
    ]);
}
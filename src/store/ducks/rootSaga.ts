import { all, takeLatest } from 'redux-saga/effects'

import { CarsTypes } from './cars/types'

import { 
    loadBrandsRequest, 
    loadCarInfosRequest, 
    loadModelsRequest, 
    loadYearsRequest 
} from './cars/sagas';

export default function* rootSaga(): Generator{
    return yield all([
        takeLatest(CarsTypes.LOAD_BRANDS_REQUEST, loadBrandsRequest),
        takeLatest(CarsTypes.LOAD_MODELS_REQUEST, loadModelsRequest),
        takeLatest(CarsTypes.LOAD_YEARS_REQUEST, loadYearsRequest),
        takeLatest(CarsTypes.LOAD_CAR_INFOS_REQUEST, loadCarInfosRequest),
    ]);
}
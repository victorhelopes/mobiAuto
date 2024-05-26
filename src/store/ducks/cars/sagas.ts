import { call, put } from 'redux-saga/effects';

import { api } from '../../../services';

import { 
    loadBrandsFailure, 
    loadBrandsSuccess, 
    loadModelsFailure, 
    loadModelsSuccess ,
    loadYearsSuccess,
    loadYearsFailure,
    loadCarInfosSuccess
} from './actions';

import { Options, loadCarInfosSuccessResponse } from './types';

export function* loadBrandsRequest(){
    try {
        const response: {data: Options[]} = yield call(api.get, `/carros/marcas`)
        yield put(loadBrandsSuccess(response.data))
    }catch(err) {
        yield put(loadBrandsFailure())
    }
}

export function* loadModelsRequest(data: any){
    try {
        const response: {data: {modelos: Options[]}} = yield call(api.get, `/carros/marcas/${data.payload.brandSelected.codigo}/modelos`)
        yield put(loadModelsSuccess(response.data.modelos))
    }catch(err) {
        yield put(loadModelsFailure())
    }
}

export function* loadYearsRequest(data: any){
    try {
        const response: {data: Options[]} = yield call(
            api.get, 
            `/carros/marcas/${data.payload.brandSelected.codigo}/modelos/${data.payload.modelSelected.codigo}/anos`
        )
        yield put(loadYearsSuccess(response.data))
    }catch(err) {
        yield put(loadYearsFailure())
    }
}

export function* loadCarInfosRequest(data: any){
    try {
        const response: {data: loadCarInfosSuccessResponse} = yield call(
            api.get, 
            `/carros/marcas/${data.payload.brandSelected.codigo}/modelos/${data.payload.modelSelected.codigo}/anos/${data.payload.yearSelected.codigo}`
        )
        yield put(loadCarInfosSuccess(response.data))
    }catch(err) {
        yield put(loadYearsFailure())
    }
}
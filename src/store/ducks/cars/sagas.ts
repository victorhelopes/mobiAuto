import { call, put } from 'redux-saga/effects';

import { api } from '../../../services';

import { 
    loadBrandsFailure, 
    loadBrandsSuccess, 
    loadModelsFailure, 
    loadModelsSuccess 
} from './actions';

import { Options } from './types';

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
        const response: {data: {modelos: Options[]}} = yield call(api.get, `/carros/marcas/${data.payload.brandSelected}/modelos`)
        yield put(loadModelsSuccess(response.data.modelos))
    }catch(err) {
        yield put(loadModelsFailure())
    }
}
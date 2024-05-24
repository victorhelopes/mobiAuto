import { Reducer } from "@reduxjs/toolkit";
import { CarState, CarsTypes, loadBrandsSuccess, loadModelsSuccess, requestBrand, requestModel } from "./types";

const INITIAL_STATE: CarState = {
    brands: [],
    models: [],
    brand: '',
    model: '',
    error: false,
    loading: false,
}

const reducer: Reducer<CarState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        //Brand
        case CarsTypes.LOAD_BRANDS_REQUEST:
            return { ...state, loading: true}

        case CarsTypes.LOAD_BRANDS_SUCCESS:
            const resultLoadBrandsRequest = action.payload as loadBrandsSuccess
            const { brands } = resultLoadBrandsRequest;
            return { ...state, loading: false, error: false, brands: brands || []}

        case CarsTypes.LOAD_BRANDS_FAILURE:
            return { ...state, loading: false, error: true, brands: [], model: '', brand: ''}
            
        //Model
        case CarsTypes.LOAD_MODELS_REQUEST:
            const { brandSelected } = action.payload as requestBrand;
            return { ...state, loading: true, model: '', models: [], brand: brandSelected}
        
        case CarsTypes.LOAD_MODELS_SUCCESS:
            const resultLoadModelsRequest = action.payload as loadModelsSuccess
            const { models } = resultLoadModelsRequest;
            return { ...state, loading: false, error: false, models: models || [], model: ''}

        case CarsTypes.LOAD_MODELS_FAILURE:
            return { ...state, loading: false, error: true, models: [], model: ''}

        case CarsTypes.LOAD_MODELS_UPDATE:
            const { modelSelected } = action.payload as requestModel;
            console.log(action.payload)
            return { ...state, loading: false, error: true, model: modelSelected}

        default:
            return state;
    }
}

export default reducer;
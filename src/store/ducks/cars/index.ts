import { Reducer } from "@reduxjs/toolkit";
import { CarState, CarsTypes, loadBrandsSuccess, loadModelsSuccess, loadYearsSuccess, requestBrand, requestModel, requestYear } from "./types";

const INITIAL_STATE: CarState = {
    brands: [],
    models: [],
    years: [],
    
    brand: '',
    model: '',
    year: '',
    
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
            return { 
                ...state, 
                loading: true, 
                brand: brandSelected,
                model: '', 
                year: '',
                models: [] 
            }
        
        case CarsTypes.LOAD_MODELS_SUCCESS:
            const resultLoadModelsRequest = action.payload as loadModelsSuccess
            const { models } = resultLoadModelsRequest;
            return { ...state, loading: false, error: false, models: models || [], model: ''}

        case CarsTypes.LOAD_MODELS_FAILURE:
            return { ...state, loading: false, error: true, models: [], model: ''}
            
        //Year
        case CarsTypes.LOAD_YEARS_REQUEST:
            const { modelSelected } = action.payload as requestModel;
            return { 
                ...state, 
                loading: true, 
                model: modelSelected,
                year: ''
            }
        
            case CarsTypes.LOAD_YEARS_UPDATE:
            const { yearSelected } = action.payload as requestYear;
            return { ...state, loading: true, year: yearSelected}
        
        case CarsTypes.LOAD_YEARS_SUCCESS:
            const resultLoadYearsRequest = action.payload as loadYearsSuccess
            const { years } = resultLoadYearsRequest;
            return { ...state, loading: false, error: false, years: years || []}

        case CarsTypes.LOAD_YEARS_FAILURE:
            return { ...state, loading: false, error: true}

        default:
            return state;
    }
}

export default reducer;
import { Reducer } from "@reduxjs/toolkit";
import { CarState, CarsTypes, Options, loadBrandsSuccess, loadCarInfosSuccessResponse, loadModelsSuccess, loadYearsSuccess } from "./types";

const INITIAL_STATE: CarState = {
    brands: [],
    models: [],
    years: [],
    
    brand: {
        codigo: '',
        nome: ''
    },
    model: {
        codigo: '',
        nome: ''
    },
    year: {
        codigo: '',
        nome: ''
    },
    value: '',
    
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
            return { 
                ...state, 
                loading: false,
                error: true,
                brands: [],
                model: {
                    codigo: '',
                    nome: ''
                },
                brand: {
                    codigo: '',
                    nome: ''
                }
            }
            
        //Model
        case CarsTypes.LOAD_MODELS_REQUEST:
            const optionSelected = (action.payload as any).brandSelected as Options;
            return { 
                ...state,
                loading: true, 
                brand: optionSelected,
                model: {
                    codigo: '',
                    nome: ''
                },
                models: [] 
            }
        
        case CarsTypes.LOAD_MODELS_SUCCESS:
            const resultLoadModelsRequest = action.payload as loadModelsSuccess
            const { models } = resultLoadModelsRequest;
            return {
                ...state,
                loading: false,
                error: false,
                models: models || [],
                model: {
                    codigo: '',
                    nome: ''
                },}

        case CarsTypes.LOAD_MODELS_FAILURE:
            return { ...state,
                loading: false,
                error: true,
                models: [],
                model: {
                    codigo: '',
                    nome: ''
                },
            }
            
        // //Year
        case CarsTypes.LOAD_YEARS_REQUEST:
            const modelSelected = (action.payload as any).modelSelected as Options;
            return { 
                ...state, 
                loading: true, 
                model: modelSelected,
                year: {
                    codigo: '',
                    nome: ''
                },
            }
        
            case CarsTypes.LOAD_YEARS_UPDATE:
            const yearSelected = (action.payload as any).yearSelected as Options;
            return { ...state, loading: true, year: yearSelected}
        
        case CarsTypes.LOAD_YEARS_SUCCESS:
            const resultLoadYearsRequest = action.payload as loadYearsSuccess
            const { years } = resultLoadYearsRequest;
            return { ...state, loading: false, error: false, years: years || []}

        case CarsTypes.LOAD_YEARS_FAILURE:
            return { ...state, loading: false, error: true}

        // //Car infos
        case CarsTypes.LOAD_CAR_INFOS_REQUEST:
            return { ...state, loading: true}

        case CarsTypes.LOAD_CAR_INFOS_SUCCESS:
            const resultLoadCarInfosRequest = action.payload as {carInfos: loadCarInfosSuccessResponse};
            const { carInfos } = resultLoadCarInfosRequest;
            return { 
                ...state,
                loading: false,
                error: false,
                value: carInfos.Valor || ''
            }

        case CarsTypes.LOAD_CAR_INFOS_FAILURE:
            return { 
                ...state,
                loading: false,
                error: true,
                brands: [],
                model: {
                    codigo: '',
                    nome: ''
                },
                brand: {
                    codigo: '',
                    nome: ''
                },
            }
            

        default:
            return state;
    }
}

export default reducer;
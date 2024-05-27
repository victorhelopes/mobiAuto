import { action } from "typesafe-actions";
import { Options, CarsTypes, loadCarInfosSuccessResponse } from "./types";

//Get brands
export const loadBrandsRequest = () => action(CarsTypes.LOAD_BRANDS_REQUEST);

export const loadBrandsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_BRANDS_SUCCESS, {options: data});

export const loadBrandsFailure = () => action(CarsTypes.LOAD_BRANDS_FAILURE);

//Get Models
export const loadModelsRequest = (brandSelected: Options) => 
    action(CarsTypes.LOAD_MODELS_REQUEST, {brandSelected});

export const loadModelsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_MODELS_SUCCESS, {options: data});

export const loadModelsFailure = () => action(CarsTypes.LOAD_MODELS_FAILURE);

//Get Years
export const loadYearsRequest = (brandSelected: Options, modelSelected: Options) => 
    action(CarsTypes.LOAD_YEARS_REQUEST, {brandSelected, modelSelected});

export const loadYearsUpdate = (yearSelected: Options) => 
    action(CarsTypes.LOAD_YEARS_UPDATE, {yearSelected});

export const loadYearsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_YEARS_SUCCESS, {options: data});

export const loadYearsFailure = () => action(CarsTypes.LOAD_YEARS_FAILURE);

//Get car infos
export const loadCarInfosRequest = (brandSelected: Options, modelSelected: Options, yearSelected: Options) => 
    action(CarsTypes.LOAD_CAR_INFOS_REQUEST, {brandSelected, modelSelected, yearSelected});

export const loadCarInfosSuccess = (data: loadCarInfosSuccessResponse) => 
    action(CarsTypes.LOAD_CAR_INFOS_SUCCESS, {carInfos: data});

export const loadCarInfosFailure = () => action(CarsTypes.LOAD_CAR_INFOS_FAILURE);

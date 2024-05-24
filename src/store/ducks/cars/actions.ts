import { action } from "typesafe-actions";
import { Options, CarsTypes } from "./types";

//Get brands
export const loadBrandsRequest = () => action(CarsTypes.LOAD_BRANDS_REQUEST);

export const loadBrandsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_BRANDS_SUCCESS, {brands: data});

export const loadBrandsFailure = () => action(CarsTypes.LOAD_BRANDS_FAILURE);

//Get Models
export const loadModelsRequest = (brandSelected: string) => 
    action(CarsTypes.LOAD_MODELS_REQUEST, {brandSelected});

export const loadModelsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_MODELS_SUCCESS, {models: data});

export const loadModelsFailure = () => action(CarsTypes.LOAD_MODELS_FAILURE);

//Get Years
export const loadYearsRequest = (brandSelected: string, modelSelected: string) => 
    action(CarsTypes.LOAD_YEARS_REQUEST, {brandSelected, modelSelected});

export const loadYearsUpdate = (yearSelected: string) => 
    action(CarsTypes.LOAD_YEARS_UPDATE, {yearSelected});

export const loadYearsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_YEARS_SUCCESS, {years: data});

export const loadYearsFailure = () => action(CarsTypes.LOAD_YEARS_FAILURE);
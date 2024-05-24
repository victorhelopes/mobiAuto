import { action } from "typesafe-actions";
import { Options, CarsTypes } from "./types";

//Get a brands
export const loadBrandsRequest = () => action(CarsTypes.LOAD_BRANDS_REQUEST);

export const loadBrandsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_BRANDS_SUCCESS, {brands: data});

export const loadBrandsFailure = () => action(CarsTypes.LOAD_BRANDS_FAILURE);

//Get
export const loadModelsRequest = (brandSelected: string) => 
    action(CarsTypes.LOAD_MODELS_REQUEST, {brandSelected});

export const updateModelSelected = (modelSelected: string) => 
    action(CarsTypes.LOAD_MODELS_UPDATE, {modelSelected});

export const loadModelsSuccess = (data: Options[]) => 
    action(CarsTypes.LOAD_MODELS_SUCCESS, {models: data});

export const loadModelsFailure = () => action(CarsTypes.LOAD_MODELS_FAILURE);
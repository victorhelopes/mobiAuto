 //Action Types
 export enum CarsTypes {
    //Brands
    LOAD_BRANDS_REQUEST = '@cars/LOAD_BRANDS_REQUEST',
    LOAD_BRANDS_SUCCESS = '@cars/LOAD_BRANDS_SUCCESS',
    LOAD_BRANDS_FAILURE = '@cars/LOAD_BRANDS_FAILURE',
    
    //Models
    LOAD_MODELS_REQUEST = '@cars/LOAD_MODELS_REQUEST',
    LOAD_MODELS_SUCCESS = '@cars/LOAD_MODELS_SUCCESS',
    LOAD_MODELS_FAILURE = '@cars/LOAD_MODELS_FAILURE',
    
    //Models
    LOAD_YEARS_REQUEST = '@cars/LOAD_YEARS_REQUEST',
    LOAD_YEARS_SUCCESS = '@cars/LOAD_YEARS_SUCCESS',
    LOAD_YEARS_FAILURE = '@cars/LOAD_YEARS_FAILURE',
    LOAD_YEARS_UPDATE = '@cars/LOAD_YEARS_UPDATE',
}
  
//Data Types
export interface Options{
    codigo: string,
    nome: string
}

export interface loadBrandsSuccess {
    brands: Options[];
}

export interface requestBrand {
    brandSelected: string;
}

export interface loadModelsSuccess {
    models: Options[];
}

export interface requestModel {
    modelSelected: string;
}

export interface requestYear {
    yearSelected: string;
}

export interface loadYearsSuccess {
    years: Options[];
}

//State type
export interface CarState {
  readonly brands: Options[];
  readonly models: Options[];
  readonly years: Options[];

  readonly brand: string;
  readonly model: string;
  readonly year: string;

  readonly error: boolean;
  readonly loading: boolean;
}
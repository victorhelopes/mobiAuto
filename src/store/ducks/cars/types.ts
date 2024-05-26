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

    //Brands
    LOAD_CAR_INFOS_REQUEST = '@cars/LOAD_CAR_INFOS_REQUEST',
    LOAD_CAR_INFOS_SUCCESS = '@cars/LOAD_CAR_INFOS_SUCCESS',
    LOAD_CAR_INFOS_FAILURE = '@cars/LOAD_CAR_INFOS_FAILURE',
}
  
//Data Types
export interface Options{
    codigo: string,
    nome: string
}

export interface loadBrandsSuccess {
    brands: Options[];
}

export interface loadRequestSuccess {
    options: Options[];
}

export interface requestWithOptionSelected {
    optionSelected: Options;
}

export interface loadModelsSuccess {
    models: Options[];
}


export interface loadCarInfosSuccessResponse{
    Valor: string;
}

export interface loadYearsSuccess {
    years: Options[];
}

//State type
export interface CarState {
  readonly brands: Options[];
  readonly models: Options[];
  readonly years: Options[];

  readonly brand: Options;
  readonly model: Options;
  readonly year: Options;
  
  readonly value: string;

  readonly error: boolean;
  readonly loading: boolean;
}
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
    LOAD_MODELS_UPDATE = '@cars/LOAD_MODELS_UPDATE',
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

export interface requestModel {
    modelSelected: string;
}

export interface loadModelsSuccess {
    models: Options[];
}

//State type
export interface CarState {
  readonly brands: Options[];
  readonly models: Options[];

  readonly brand: string;
  readonly model: string;

  readonly error: boolean;
  readonly loading: boolean;
}
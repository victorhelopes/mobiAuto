"use client"

import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect, useDispatch } from "react-redux"

import * as BrandsActions from '../../store/ducks/cars/actions'

import { Options } from "@/store/ducks/cars/types";
import store, { ApplicationState } from "@/store";
import { SelectField } from "@/components/molecules/SelectField";


interface StateProps {
    models: Options[];
    model: string;
    brand: string;
}

interface DispatchProps {
    loadBrandsRequest(): void;
    updateModelSelected(value: string): void;
}

type Props = StateProps & DispatchProps;

class SelectModel extends Component<Props>{
    componentDidMount(): void {
        const { loadBrandsRequest } = this.props;
        loadBrandsRequest()
    }
    
    render(): ReactNode {  
        const {models, model, brand} = this.props;

        function handleModel(value: string){
            store.dispatch({type: '@cars/LOAD_MODELS_UPDATE', payload: {modelSelected: value}})
        } 

        return (<SelectField
              label={{
                id: 'Modelo',
                name: 'Modelo'
              }}
              value={model}
              onClick={handleModel}
              options={models.map((model)=>{
                return {
                    value: model.codigo,
                    text: model.nome
                }
              })}
            />)
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    models: state.cars.models,
    model: state.cars.model,
    brand: state.cars.brand
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectModel);
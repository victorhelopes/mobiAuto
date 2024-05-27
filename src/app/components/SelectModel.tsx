"use client"

import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"

import * as BrandsActions from '../../store/ducks/cars/actions'


import { Options } from "@/store/ducks/cars/types";
import { ApplicationState } from "@/store";
import { SelectField } from "@/components/molecules/SelectField";

interface StateProps {
    models: Options[];
    model: Options;
    brand: Options;
    loading: boolean;
}

interface DispatchProps {
    loadYearsRequest(brandSelected: Options, modelSelected: Options): void;
}

type Props = StateProps & DispatchProps;

class SelectModel extends Component<Props>{    
    render(): ReactNode {  
        const {models, model, brand, loading, loadYearsRequest} = this.props;

        function handleModel(value: Options){
            loadYearsRequest(brand, value)
        } 

        const modelOptions = models.map((model)=>{
            return {
                value: model.codigo + ',' + model.nome,
                text: model.nome
            }
        })

        return (
            <SelectField
              label={{
                id: 'Modelo',
                name: 'Modelo'
              }}
              value={model}
              onClick={handleModel}
              options={modelOptions}
              disabled={loading || modelOptions.length === 0}
            />
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    models: state.cars.models,
    model: state.cars.model,
    brand: state.cars.brand,
    
    loading: state.cars.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectModel);
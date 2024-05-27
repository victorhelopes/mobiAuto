"use client"

import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"

import * as BrandsActions from '../../store/ducks/cars/actions'

import { Options } from "@/store/ducks/cars/types";
import store, { ApplicationState } from "@/store";
import { SelectField } from "@/components/molecules/SelectField";


interface StateProps {
    years: Options[];
    model: Options;
    brand: Options;
    year: Options;
    loading: boolean;
}

type Props = StateProps

class SelectYear extends Component<Props>{    
    render(): ReactNode {  
        const {years, year, loading, model} = this.props;
        
        function handleYear(value: Options){
            store.dispatch({type: '@cars/LOAD_YEARS_UPDATE', payload: {yearSelected: value}})
        } 
        const yearOptions = years.map((year)=>{
            return {
                value: year.codigo + ',' + year.nome,
                text: year.nome
            }
        })
        
        if(model.codigo){
            return (
                <SelectField
                    label={{
                        id: 'Ano',
                        name: 'Ano'
                    }}
                    value={year}
                    onClick={handleYear}
                    options={yearOptions}
                    disabled={loading}
                />
            )
        }
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    years: state.cars.years,

    model: state.cars.model,
    brand: state.cars.brand,
    year: state.cars.year,
    
    loading: state.cars.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectYear);
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
    model: string;
    brand: string;
    year: string;
}

interface DispatchProps {

}

type Props = StateProps & DispatchProps

class SelectYear extends Component<Props>{    
    render(): ReactNode {  
        const {years, year, model} = this.props;
        
        function handleYear(value: string){
            store.dispatch({type: '@cars/LOAD_YEARS_UPDATE', payload: {yearSelected: value}})
        } 
        const yearOptions = years.map((year)=>{
            return {
                value: year.codigo,
                text: year.nome
            }
        })
        
        if(model){
            return (
                <SelectField
                    label={{
                        id: 'Ano',
                        name: 'Ano'
                    }}
                    value={year}
                    onClick={handleYear}
                    options={yearOptions}
                />
            )
        }
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    years: state.cars.years,

    model: state.cars.model,
    brand: state.cars.brand,
    year: state.cars.year
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectYear);
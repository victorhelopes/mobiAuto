"use client"

import { bindActionCreators, Dispatch } from "@reduxjs/toolkit"
import {  Component, ReactNode } from "react";
import { connect } from "react-redux"

import * as BrandsActions from '../../store/ducks/cars/actions'

import { Options } from "@/store/ducks/cars/types";
import { ApplicationState } from "@/store";
import { SelectField } from "@/components/molecules/SelectField";


interface StateProps {
    brands: Options[];
    brand: string;
}

interface DispatchProps {
    loadBrandsRequest(): void;
    loadModelsRequest(brandSelected: string): void;
}

type Props = StateProps & DispatchProps

class SelectBrand extends Component<Props>{

    componentDidMount(): void {
        const { loadBrandsRequest } = this.props;
        loadBrandsRequest();
    }
    
    render(): ReactNode {  
        const {brands, brand, loadModelsRequest} = this.props;
        
        function handleBrand(value: string){
            loadModelsRequest(value)
        } 
        const brandOptions = brands.map((brand)=>{
            return {
                value: brand.codigo,
                text: brand.nome
            }
        })

        return (
            <SelectField
                label={{
                    id: 'Marca',
                    name: 'Marca'
                }}
                value={brand}
                onClick={handleBrand}
                options={brandOptions}
            />
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    brands: state.cars.brands,
    brand: state.cars.brand,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
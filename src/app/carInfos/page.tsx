'use client'

import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";

import { Container } from "@mui/material";

import * as BrandsActions from '@/store/ducks/cars/actions'
import { ApplicationState } from "@/store";

import { Title } from "@/components/atoms/Title";
import { Chip } from "../../components/atoms/Chip";
import { Options } from "@/store/ducks/cars/types";

interface StateProps {
  year: Options;
  model: Options;
  brand: Options;
  value: string;
  loading: boolean;
}

interface DispatchProps {
  loadCarInfosRequest(brandSelected: Options, modelSelected: Options, yearSelected: Options): void;
}

type Props = StateProps & DispatchProps;
class CarInfos extends Component<Props>{
  componentDidMount(): void {
    const { loadCarInfosRequest, year, model, brand } = this.props;
    loadCarInfosRequest(brand,model, year);
}

  render(): ReactNode {
    return (
      <Container
        style={{
          padding: '2rem',
          backgroundColor: '#DCF5F2'
        }}
      >
        <Title 
          text={`Tabela Fipe: Preço ${this.props.brand.nome} ${this.props.model.nome} ${this.props.year.nome}`}
        />
        <Chip
            text={this.props.value}
            loading={this.props.loading}
        />
        <p style={{
          color: '#A19386',
          fontSize: '1rem',
          width: 'fit-content',
          margin: 'auto',
        }}>
          Este é o preço de compra do véiculo
        </p>
      </Container>
    );
  } 
}

const mapStateToProps = (state: ApplicationState) => ({
  year: state.cars.year,
  brand: state.cars.brand,
  model: state.cars.model,
  value: state.cars.value,

  loading: state.cars.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(CarInfos);

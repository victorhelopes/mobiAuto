'use client'

import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";

import { ApplicationState } from "@/store";
import * as BrandsActions from '../store/ducks/cars/actions'

import { Container } from "@mui/material";

import { Card } from "@/components/molecules/Card";
import { Subtitle } from "@/components/atoms/Subtitle";
import { Title } from "@/components/atoms/Title";

import SelectBrand from "./components/SelectBrand";
import SelectModel from "./components/SelectModel";
import SelectYear from "./components/SelectYear";
import { Options } from "@/store/ducks/cars/types";

interface StateProps {
  year: Options;
}
type Props = StateProps;

class Home extends Component<Props>{   
  render(): ReactNode {
    const {year} = this.props;

    return (
      <Container
        style={{
          backgroundColor: '#F9F6FC',
          padding: '2rem'
        }}
      >
        <Title text="Tabela Fipe"/>
        <Subtitle text="Consulte o valor de um veículo de forma gratuita"/>
          <Card 
            buttonText='Consultar preço'
            buttonIsDisabled={year.codigo.length === 0}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <SelectBrand/>
              <SelectModel/>
              <SelectYear/>
            </div>
          </Card>
      </Container>
    );
  } 
}

const mapStateToProps = (state: ApplicationState) => ({
  year: state.cars.year,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(BrandsActions, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(Home);

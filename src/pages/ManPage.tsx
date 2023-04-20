import React from 'react'
import { DressList } from '../common'
import { GlobalData, MyState } from '../core';
import { HomeContainer } from '../layout'

export const ManPage: React.FC = () => {

   const { state, CheckboxChange } = React.useContext<MyState>(GlobalData);
   const {products} = state;

  return (
    <HomeContainer>
      <DressList
        dresses={products}
        whatType={"man"}
        CheckboxChange={CheckboxChange}
      />
    </HomeContainer>
  );
}

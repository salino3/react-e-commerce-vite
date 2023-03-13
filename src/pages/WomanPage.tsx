import React from 'react';
import { DressList } from '../common/DressList';
import { GlobalData, MyState } from '../core';
import { HomeContainer } from '../layout';

export const WomanPage: React.FC = () => {

     const { state, CheckboxChange } = React.useContext<MyState>(GlobalData);
     const { products } = state;


  return (
    <HomeContainer>
      <DressList
        dresses={products}
        whatType={"woman"}
        CheckboxChange={CheckboxChange}
      />
    </HomeContainer>
  );
}

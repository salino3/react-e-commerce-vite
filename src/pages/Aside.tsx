import React from "react";
 import { AsideContainer } from "../layout";
import { MyState, GlobalData, ProductInfo } from "../core/";
import { ListAside } from "../components";

export const Aside: React.FC = () => {
  
  const { state, CheckboxChange, DeselectAll } = React.useContext<MyState>(GlobalData);
  const {products} = state;

 const list: ProductInfo[] = products?.filter((item: ProductInfo) => item.selected === true);
const totalPrice: number = list?.reduce((accumulator: number, item: ProductInfo) => accumulator + item.price, 0);


  return (
    <AsideContainer>
      <h3 className="text-info"> Onix Shop</h3>
      <button onClick={DeselectAll} className="btnCart">
        <b>Empty cart</b>
      </button>
      <div className="container_content">
        <div className="item2">
          <i className="bi bi-cart4 text-success" style={{ fontSize: "3em" }}></i>
          <h4 className="text-info">Your Cart - {totalPrice} €</h4>
        </div>
        <ListAside list={list} CheckboxChange={CheckboxChange} />
      </div>
    </AsideContainer>
  );
}; 


import React from "react";
import { Data } from "../api/data";
import { GlobalData, MyReducer, ProductInfo } from ".";


interface Props {
  children: JSX.Element | JSX.Element[];
};

export const MyProvider: React.FC<Props> = ({ children }) => {
  
  const [state, dispatch] = React.useReducer(MyReducer, Data);

  //* loadData
  const loadData = React.useCallback(() => {
    dispatch({
      type: "LOAD_DATA",
      payload: Data,
    });
  }, []);

  React.useEffect(() => {
    loadData();
  }, []);


  //* CheckboxChange
  const CheckboxChange = React.useCallback(
    (id: number) => {
      const newProducts = state?.products?.map((product: ProductInfo) =>
        product?.id === id
          ? { ...product, selected: !product.selected }
          : product );
      dispatch({
        type: "CHANGE_CHECKBOX",
        payload: newProducts,
      });
    },
    [state, dispatch]
  );


  //* DeselectAll
  const DeselectAll = React.useCallback(() => {
    const newProducts = state?.products?.map((product: ProductInfo) => ({
      ...product,
      selected: false }));
    dispatch({
      type: "CHANGE_ALL_FALSE",
      payload: newProducts,
    });
  }, [state, dispatch]);

  //* animate__jello
  React.useEffect(() => {
    const button = document.querySelector(".btnAside");
    if (button) {
      button.classList.add("animate__jello");
      setTimeout(() => button.classList.remove("animate__jello"), 500);
    };
  }, [state.products]);
  
  return (
    <GlobalData.Provider
      value={{ state, dispatch, loadData, CheckboxChange, DeselectAll }} >
      {children}
    </GlobalData.Provider>
  );
};



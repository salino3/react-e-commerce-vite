import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalData, MyState, ProductInfo } from "../core";
import {HeartCheckbox} from "../common/HeartCheckbox";

export const MoreInfo: React.FC = () => {
  const { state, CheckboxChange } = React.useContext<MyState>(GlobalData);

  const navigate = useNavigate();
  const { id } = useParams();

  const product: ProductInfo | undefined = state?.products?.find(
    (item: ProductInfo) => item.id === Number(id)
  );

  if (product) {
    return (
      <div className="m-auto ">
        <h5
          className="navigateBack text-center text-info m-1 mb-3"
          onClick={() => navigate(-1)}
        >
          <u>Go back</u>
        </h5>
        <div className="card2 ">
          <div className="m-1">{product?.id}</div>
          <img src={`/${product?.picUrl}`} alt="product" />
          <div className="texts">
            <h5 className="text-success m-2">
              title: <span>{product?.title}</span>
            </h5>
            <h6 className="myCheckBox text-success m-2">
              Price: <span>{product?.price} €</span>
              <HeartCheckbox
                selected={product?.selected}
                id={product?.id}
                CheckboxChange={CheckboxChange}
              />
            </h6>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h1 className="text-center m-2  text-warning">Product Not Found...</h1>
    );
  }
};

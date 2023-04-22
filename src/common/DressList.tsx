import React from "react";
import { ProductInfo } from "../core";
import {HeartCheckbox} from "./HeartCheckbox";

interface Props {
  dresses: ProductInfo[];
  whatType: string;
  CheckboxChange: (id: number) => void;
}

export const DressList: React.FC<Props> = (props) => {
  const { dresses, whatType, CheckboxChange } = props;


  return (
    <>
      {dresses &&
        Array.isArray(dresses) &&
        dresses
          .filter((dress: ProductInfo) => dress.type === whatType)
          .map((dress: ProductInfo) => (
            <div className="card" key={dress.id}>
              {dress.id}
              <img src={`/${dress?.picUrl}`} alt="dress" />
              <div className="texts">
                <p>{dress?.title}</p>
                <h6 className="myCheckBox">
                  <span>{dress.price} €</span>
                  <HeartCheckbox
                    selected={dress?.selected}
                    id={dress?.id}
                    CheckboxChange={CheckboxChange}
                  />
                </h6>
              </div>
            </div>
          ))}
    </>
  );
};

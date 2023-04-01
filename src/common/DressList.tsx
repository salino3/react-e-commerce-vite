import React from "react";
import { ProductInfo } from "../core";

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
              <img src={`${dress?.picUrl}`} alt="dress" />
              <div className="texts">
                <p>{dress?.title}</p>
                <h6 className="myCheckBox">
                  <span>{dress.price} €</span>
                  <input
                  className="input3"
                    type={"checkbox"}
                    onChange={() => CheckboxChange(dress?.id)}
                    checked={dress?.selected}
                  />
                </h6>
              </div>
            </div>
          ))}
    </>
  );
};

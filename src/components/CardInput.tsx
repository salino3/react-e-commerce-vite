import React, { useContext } from "react";
import { GlobalData, MyState, ProductInfo } from "../core";
import "./stylesComponents.scss";

interface Props {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<any>>;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardInput: React.FC<Props> = (props) => {
  const { first, setFirst, setToggle } = props;

  const { state } = useContext<MyState>(GlobalData);
  const { products } = state;

  const onSearchCard = (event: any) => {

    setFirst(event?.toString());
    setToggle(true);
  };

  return (
    <>
      {!products
        ? "Loading"
        : products
            .filter((item: ProductInfo) => {
              let searchTerm = "";
              let x: string = first?.toLowerCase() || "";
              searchTerm = x || "";
              const thetitle: string = item.title.toLowerCase() || "";
              const theid = item.id.toString();

              return (
                searchTerm &&
                (theid.includes(searchTerm) ||
                  thetitle.includes(searchTerm)) &&
                (thetitle || theid)
              );
            })
            .slice(0, 10)
            .map((item: ProductInfo) => (
              <div
                onClick={() => onSearchCard(item.id)}
                className="divRows"
                key={item.id}
              >
                <b>
                  {item.id} ~ {item.title}
                </b>
              </div>
            ))}
    </>
  );
};


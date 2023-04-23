import React from "react";
import { ProductInfo } from "../core";
import "./stylesComponents.scss";

interface Props {
  list: ProductInfo[];
  CheckboxChange: (id: number) => void;
};

export const ListAside: React.FC<Props> = (props) => {
  const { list, CheckboxChange } = props;

  return (
    <div className="divListAside">
      {!list || list.length < 1 ? (
        <h5 className="txtEmpty">
          <u>The Cart is Empty</u>
        </h5>
      ) : (
        list &&
        list.map((item: ProductInfo) => (
          <div className="listAside" key={item.id}>
            <img src={`/${item.picUrl}`} width="50" alt="dress" />
            <p className="item1">
              <span>{item.title}</span>
            </p>
            <div className="box_bi_trash">
            <i
              className="bi bi-trash item1 item2"
              onClick={() => {
                CheckboxChange(item.id);
              }}
              style={{ fontSize: "2em" }}
              ></i>
              </div>
          </div>
        ))
      )}
    </div>
  );
};

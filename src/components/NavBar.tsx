import React from "react";
import { Link } from "react-router-dom";
import { InputNav } from "./InputNav";
import "./stylesComponents.scss";

export const NavBar: React.FC = () => {
  return (
    <nav className=" pb-2 ">
      <div className="d-flex mx-5 ">
        <div className="m-3 mx-5">
          <Link to={"/"}>
            <button className=" btn btn-success px-4" >
              <i className="bi bi-house-fill"></i>{" "}
            </button>
          </Link>
        </div>
        <h3 className="text-info">e-commerce </h3>{" "}
      </div>
      <div className="divNavComponents">
        <InputNav />
      </div>
    </nav>
  );
};

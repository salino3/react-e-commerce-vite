import React from "react";
import { NavBar } from "./NavBar";
import "./stylesComponents.scss";

export const Header: React.FC = () => {
  
  return (
    <header className="myHeader ">
      <NavBar />
    </header>
  );
};

import React from "react";
import { HomeContainer } from "../layout";
import { Link, Outlet } from "react-router-dom";
import { man, root } from "../router";

export const Home: React.FC = () => {


  return (
    <HomeContainer>
      <h5 className="boxLinks">
        <Link to={root}>Woman</Link>
        <Link to={man}>Man</Link>
      </h5>
      <Outlet />
    </HomeContainer>
  );
};

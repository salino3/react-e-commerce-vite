import React from "react";
import { Outlet } from "react-router-dom";
import { HomeContainer } from "../layout";
import { man, root } from "../router";
import { Links } from "../common";

export const Home: React.FC = () => {

  return (
    <HomeContainer>
      <Links root={root} man={man} />
      <Outlet />
      <Links root={root} man={man} />
    </HomeContainer>
  );
};

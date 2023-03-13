import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, ManPage, WomanPage, MoreInfo, Aside, PageNotFound } from "../pages";
import { man, info, root } from './interfaces';


export const AppRouter: React.FC = () => {

  return (
    <div className="divContainer">
      <Routes>
        <Route path={root} element={<Home />}>
          <Route path={root} element={<WomanPage />} />
          <Route path={man} element={<ManPage />} />
        </Route>
        <Route path={info} element={<MoreInfo />} />
        <Route path={'/*'} element={<PageNotFound />} />
      </Routes>
      <div>
        <Aside />
      </div>
    </div>
  );
}

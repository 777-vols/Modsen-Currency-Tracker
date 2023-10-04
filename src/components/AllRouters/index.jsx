import React from 'react';
import { Route, Routes } from 'react-router-dom';

import routesConfig from './routersConfig';

function AllRouters() {
  return (
    <Routes>
      {routesConfig.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}

export default AllRouters;

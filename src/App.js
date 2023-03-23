// libs
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// data source
import { listRoutes } from "./dataSources/Routes";
// children
import Main from "src/layouts/Main";

const App = () => (
  <Router>
    <Main>
      <Routes>
        {listRoutes.map((route) => (
          <Route key={route.id} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Main>
  </Router>
);

export default App;

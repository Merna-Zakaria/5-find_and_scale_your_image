import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import GeneralSearch from '../containers/generalSearch';
import ScaleImage from "../containers/scaleImage"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<GeneralSearch />} exact />
          <Route path="/scale_img" element={<ScaleImage />} exact />
          <Route path="*" element={<p>not found</p>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
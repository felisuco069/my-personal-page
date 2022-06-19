import { AboutMeScene, HomeScene } from "@/scenes";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.aboutMe} element={<AboutMeScene />} />
      </Routes>
    </Router>
  );
};

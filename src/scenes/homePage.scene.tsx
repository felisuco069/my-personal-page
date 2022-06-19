import React from "react";

import { HomePageContainer } from "@/pods/homePage/homePage.container";
import { switchRoutes } from "@/core/routes/routes";
import { Link } from "react-router-dom";

export const HomeScene: React.FC = () => {
  return (
    <>
      <HomePageContainer />
      <Link to={switchRoutes.aboutMe}>About</Link>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

import { appRoutes } from "../../routes/PrivateRoutes";

const Nav = () => {
  return (
    <header>
      <Link to={appRoutes.home.path}>Home</Link>
      <Link to={appRoutes.settings.path}>Settings</Link>
      <Link to={appRoutes.profile.path}>Profile</Link>
    </header>
  );
};

export default Nav;

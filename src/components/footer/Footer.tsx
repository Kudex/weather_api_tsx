import React from "react";
import { Link } from "react-router-dom";

import { appRoutes } from "../../routes/PrivateRoutes";

const Footer = () => {
  return (
    <div>
      <Link to={appRoutes.settings.path}>Contacts</Link>
    </div>
  );
};

export default Footer;
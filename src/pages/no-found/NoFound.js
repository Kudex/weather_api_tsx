import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { appRoutes } from "../../routes/PrivateRoutes";

const NoFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate(appRoutes.home.path, {
        replace: true,
      });
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Current page is not found</h1>
    </div>
  );
};

export default NoFound;

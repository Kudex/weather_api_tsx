import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import NoFound from "../pages/no-found/NoFound";
import LoginPage from "../pages/login/Login.page";
import SignUpPage from "../pages/sign-up/SignUp.page";

export const notAuthorizedRoutes = {
  signIn: {
    id: 1,
    path: "/",
    element: <LoginPage />,
  },
  signUp: {
    id: 2,
    path: "/sign-up",
    element: <SignUpPage />,
  },
};

const NotAuthorizedRoutes = () => {
  return (
    <div>
      <ReactRouterRoutes>
        {Object.values(notAuthorizedRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}

        <Route path="*" element={<NoFound />} />
      </ReactRouterRoutes>
    </div>
  );
};

export default NotAuthorizedRoutes;

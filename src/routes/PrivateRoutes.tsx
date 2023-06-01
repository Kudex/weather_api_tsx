import React from "react";
import { Route, Routes as ReactRouterRoutes } from "react-router-dom";

import Nav from "../components/navigation/Nav";
import HomePage from "../pages/home/Home.page";
import SettingsPage from "../pages/settings/Settings.page";
import ProfilePage from "../pages/profile/Profile.page";
import NoFound from "../pages/no-found/NoFound";

export const appRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  settings: {
    id: 2,
    path: "/settings",
    element: <SettingsPage />,
  },
  profile: {
    id: 3,
    path: "/profile",
    element: <ProfilePage />,
  },
};

const PrivateRoutes = () => {
  return (
    <div>
      <Nav />

      <ReactRouterRoutes>
        {Object.values(appRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}

        <Route path="*" element={<NoFound />} />
      </ReactRouterRoutes>
    </div>
  );
};

export default PrivateRoutes;

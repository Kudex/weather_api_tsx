import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();

  return (
    <div>
      Hello from profile data from state from other route is:{" "}
      {location?.state?.value}
    </div>
  );
};

export default ProfilePage;

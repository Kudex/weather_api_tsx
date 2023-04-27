import React from "react";
import { notAuthorizedRoutes } from "../../routes/NotAuthorizedRoutes";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <h1>Hello from Sign UP</h1>
      Already have an account?{" "}
      <Link to={notAuthorizedRoutes.signIn.path}> Sign in</Link>
    </div>
  );
};

export default SignUpPage;

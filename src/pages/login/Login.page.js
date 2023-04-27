import React, { useState } from "react";
import { Link } from "react-router-dom";
import { notAuthorizedRoutes } from "../../routes/NotAuthorizedRoutes";
import styles from "./login.module.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/auth.actions";
import {
  getTokenStorageData,
  setTokenDataToStore,
} from "../../utils/functions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      password,
      login: username,
    };

    const authData = {
      token: "c21679164bmsh1b9a3ae782856e4p1821e4jsn52c06eb27296",
      host: "air-quality.p.rapidapi.com",
    };

    setTokenDataToStore({ authData });

    dispatch(loginAction({ authData }));
  };

  return (
    <div>
      <h1 className={styles.titleLoginPage}>Hello from LOGIN PAGE!</h1>
      <form className={styles.form}>
        <input
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={submitHandler}>
          Login
        </button>
      </form>
      <p className={styles.signup}>
        Do not have an account?{" "}
        <Link to={notAuthorizedRoutes.signUp.path}>SignUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;

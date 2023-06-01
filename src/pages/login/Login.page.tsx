import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import styles from "./login.module.css";
import { notAuthorizedRoutes } from "../../routes/NotAuthorizedRoutes";
import { loginAction } from "../../store/actions/auth.actions";
import { setTokenDataToStore } from "../../utils/functions";
import TextField from "../../components/textField/TextField";

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    username: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field must be required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "in correct email address"
      )
      .required("This field must be required"),
  });

  const submitHandler = () => {
    const authData = {
      token: "a7477432a5msh121ac36bcab8f65p189851jsn1f6c5b71b87e",
      host: "air-quality.p.rapidapi.com",
    };

    setTokenDataToStore(authData);
    dispatch(loginAction(authData));
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello form login page</h1>
      <div className={styles.form}>
        <TextField
          value={values.username}
          placeholder="username"
          error={errors.username}
          touched={touched.username}
          onChange={handleChange("username")}
        />
        <TextField
          value={values.email}
          placeholder="email"
          error={errors.email}
          touched={touched.email}
          onChange={handleChange("email")}
        />

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Login
        </button>
      </div>

      <p className={styles.signup}>
        Do not have an account?{" "}
        <Link to={notAuthorizedRoutes.signUp.path}>SingUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;

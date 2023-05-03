import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  email: "",
  password: "",
};
const Login = ({ setissignupandlogin }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {},
    });
  const checkAuth = () => {
    const { email, password } = initialValues;
    if (email.length == 0 && password.length == 0) {
      alert("please enter valid value");
    }
  };

  return (
    <div className="container">
      <div className="section">
        <div className="heading">
          <h3>Welcome</h3>
          <p>
            I am happy to see you again. You can continue where you left of by
            logging in.
          </p>
        </div>
        <from onSubmit={handleSubmit}>
          <div className="from-container">
            <div className="email-section">
              <label htmlFor="email" className="username-heading head">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                placeholder="example@gmail.com"
                name="email"
                className="username-input-section"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id={errors.name && touched.name ? "focus" : ""}
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="password-section">
              <label htmlFor="password" className="username-heading head">
                Password
              </label>
              <input
                autoComplete="off"
                type="password"
                placeholder="******"
                name="password"
                className="username-input-section"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id={errors.password && touched.password ? "focus" : ""}
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
            </div>
            {!(errors.password || errors.email) &&
            values.email &&
            values.password ? (
              <Link to="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                <div
                  className="sign-button-section"
                  onClick={() => setissignupandlogin((prev) => !prev)}
                >
                  <button className="login-btn" type="submit">
                    Login
                  </button>
                </div>
              </Link>
            ) : (
              <div className="sign-button-section" onClick={checkAuth}>
                <button className="login-btn" type="submit">
                  Login
                </button>
              </div>
            )}
          </div>
        </from>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = ({ state, actions }) => {
  let navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    await actions.signIn(values);
    window.location.reload();
  };

  useEffect(() => {
    if (state.userReducer.auth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-container">
      <h1 className="login-title">Please sign in</h1>
      <div className="login-area">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label>
                  <h3>Email</h3>
                </label>
                <Field className="field" type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />

                <label>
                  <h3>Password</h3>
                </label>
                <Field className="field" type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />

                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  LOG IN
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>

      <div className="new-account-text">
        <h2>
          Don't have an account?
          <Link to="/register"> Create a new one</Link>
        </h2>
      </div>
    </div>
  );
};
export default LoginForm;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),

  timestamp: Yup.date().default(() => new Date()),
});

const RegisterForm = ({ state, actions }) => {
  let navigate = useNavigate();
  console.log(localStorage.getItem("signup"));
  const handleSubmit = async (values) => {
    await actions.signUp(values);
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("signup")==="true") {
      localStorage.setItem("signup", false);
      navigate("/login");
      alert("Signup successful");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.userReducer.signup]);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        // pass api results to initialValues as props
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
        render={({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="register-container">
            <form onSubmit={handleSubmit}>
              <div className="register-area">
                <h1>Register a new account</h1>

                <div className="email-area">
                  <label>
                    <h3>Email *</h3>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      border={touched.email && errors.email && "1px solid red"}
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                  </label>
                  {touched.email && errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>

                <div className="password-area">
                  <label>
                    <h3>Password *</h3>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      border={
                        touched.password && errors.password && "1px solid red"
                      }
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </label>
                  {touched.password && errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>

                <div className="confirm-password-area">
                  <label>
                    <h3>Confirm Password *</h3>
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      border={
                        touched.confirmPassword &&
                        errors.confirmPassword &&
                        "1px solid red"
                      }
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </label>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                  )}
                </div>

                <button className="submit-btn" type="submit">
                  REGISTER
                </button>
              </div>
              <div className="new-account-text">
                <h2>
                  Already have an account?
                  <Link to="/login"> Sign In</Link>
                </h2>
              </div>
            </form>
          </div>
        )}
      />
    </div>
  );
};
export default RegisterForm;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  timestamp: Yup.date().default(() => new Date()),
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // make the service call to get initial values of form
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          // pass api results to initialValues as props
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            // call service
          }}
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
                        border={
                          touched.email && errors.email && "1px solid red"
                        }
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
  }
}

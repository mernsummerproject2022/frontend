import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { AppProviderContext } from "../context/AppProvider";
import { Form, Field, ErrorMessage } from "formik";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  timestamp: Yup.date().default(() => new Date()),
});

const RegisterForm = () => {
  const { actions,state } = useContext(AppProviderContext);

  return (
    <div className="register-container">
      <h1 className="login-title">Please sign up</h1>
      <div className="login-area">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);

            values["confirmPassword"] = values.password;
            
            actions.signUp(values);
            
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <label>
                  <h3>Email</h3>
                </label>
                <Field className="field" type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label>
                  <h3>Password</h3>
                </label>
                <Field className="field" type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button
                  className="submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  SIGN UP
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default RegisterForm;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     // make the service call to get initial values of form
//   }
//   render() {
//     return (
//       <div>
//         <Formik
//           initialValues={{ email: "", password: "" }}
//           // pass api results to initialValues as props
//           validationSchema={SignupSchema}
//           onSubmit={(values) => {
//             console.log(values);
//             // call service
//             const data={email: values.email, password: values.password,confirmPassword: values.password};

//           }}
//           render={({
//             touched,
//             errors,
//             values,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//           }) => (
//             <div className="register-container">
//               <form onSubmit={handleSubmit}>
//                 <div className="register-area">
//                   <h1>Register a new account</h1>

//                   <div className="email-area">
//                     <label>
//                       <h3>Email *</h3>
//                       <input
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.email}
//                         border={
//                           touched.email && errors.email && "1px solid red"
//                         }
//                         type="text"
//                         name="email"
//                         placeholder="Email"
//                       />
//                     </label>
//                     {touched.email && errors.email && (
//                       <p style={{ color: "red" }}>{errors.email}</p>
//                     )}
//                   </div>
//                   <div className="password-area">
//                     <label>
//                       <h3>Password *</h3>
//                       <input
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.password}
//                         border={
//                           touched.password && errors.password && "1px solid red"
//                         }
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                       />
//                     </label>
//                     {touched.password && errors.password && (
//                       <p style={{ color: "red" }}>{errors.password}</p>
//                     )}
//                   </div>
//                   <button className="submit-btn" type="submit">
//                     REGISTER
//                   </button>
//                 </div>
//                 <div className="new-account-text">
//                   <h2>
//                     Already have an account?
//                     <Link to="/login"> Sign In</Link>
//                   </h2>
//                 </div>
//               </form>
//             </div>
//           )}
//         />
//       </div>
//     );
//   }
// }

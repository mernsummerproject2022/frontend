import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AppProviderContext } from "../context/AppProvider";
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});


const LoginForm = () => {
  const { actions } = useContext(AppProviderContext);
  return (
    <div className="login-container">
      <h1 className="login-title">Please sign in</h1>
      <div className="login-area">
        <Formik

          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          
            actions.signIn(values);
          }
          }
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
                  LOGIN
                </button>
              </Form>
            );
          }
          }
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
}
export default LoginForm;

// class LoginPage extends React.Component {
//   handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

//   render() {
//     return (
//       <>
//         <div className="login-container">
//           <h1 className="login-title">Please sign in</h1>

//           <div className="login-area">
//             <Formik
//               initialValues={{ email: "", password: "" }}
//               validationSchema={loginSchema}
//               onSubmit={this.handleSubmit}
//             >
//               {({ isSubmitting }) => {
//                 return (
//                   <Form>
//                     <label>
//                       <h3>Email</h3>
//                     </label>
//                     <Field className="field" type="email" name="email" />
//                     <ErrorMessage name="email" component="div" />

//                     <label>
//                       <h3>Password</h3>
//                     </label>
//                     <Field className="field" type="password" name="password" />
//                     <ErrorMessage name="password" component="div" />

//                     <button
//                       className="submit-btn"
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       LOG IN
//                     </button>
//                   </Form>
//                 );
//               }}
//             </Formik>
//           </div>

//           <div className="new-account-text">
//             <h2>
//               Don't have an account?
//               <Link to="/register"> Create a new one</Link>
//             </h2>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default LoginPage;

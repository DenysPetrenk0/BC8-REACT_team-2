import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
// import { error} from
import { register, login } from '../../redux/auth/authOperations';
// import { useRouteMatch } from "react-router-dom";
import * as Yup from 'yup';
import { getError } from '../../redux/auth/authSelectors';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is Required.'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
});

const AuthForm = ({ history }) => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  // const match = useRouteMatch();

  // const login = useCallback(
  //   ({ email, password }) => {
  //     dispatch(login({ email, password }));
  //   },
  //   [dispatch]
  // );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,

    onSubmit: ({ email, password }) => {
      const newUser = {
        email,
        password,
      };
      console.log('ajfaksjf');
      // match.url === "/auth" ? register(newUser) : login(newUser);

      // if register function succesful, redirect to login page
      dispatch(register(newUser));
    },
  });
  useEffect(() => {
    if (error?.includes('409')) {
      dispatch(login(formik.values));
    }
  }, [error, dispatch, formik.values]);

  // console.log(`formik`, formik);
  return (
    <div className="container">
      <div className="row">
        <div className="">
          <form noValidate onSubmit={formik.handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal">Register</h1>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="input-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="input-feedback">{formik.errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Login
            </button>
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Register!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

// import React, { useState, useCallback } from "react";
// import { useDispatch } from "react-redux";
// import { useRouteMatch } from "react-router-dom";
// // import { error } from "@pnotify/core/dist/PNotify.js";

// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { register, login } from "../redux/auth/authOperations";

// const initialState = {
//   email: "",
//   password: "",
// };

// export default function AuthForm() {
//   const [user, setUser] = useState(initialState);
//   const dispatch = useDispatch();
//   const match = useRouteMatch();
//   //   const isError = useSelector(getErrorAuth);

//   //   const [name, setName] = useState("");
//   //   const [email, setEmail] = useState("");
//   //   const [password, setPassword] = useState("");

//   //   useEffect(() => {
//   //     console.log("hi");
//   //     return () => dispatch(resetError());
//   //   }, [dispatch]);

//   //   useEffect(() => {
//   //     if (isError !== null)
//   //       error({
//   //         text: isError,
//   //         delay: 1000,
//   //       });
//   //     // return () => dispatch(resetError());
//   //   }, [isError, dispatch]);

//   const onRegister = useCallback(
//     ({ email, password }) => {
//       dispatch(register({ email, password }));
//     },
//     [dispatch]
//   );

//   const onLogin = useCallback(
//     ({ email, password }) => {
//       dispatch(login({ email, password }));
//     },
//     [dispatch]
//   );

//   //   const onHandleChange = (event) => {
//   //     const { name, value } = event.target;
//   //     if (name === "name") setName(value);
//   //     if (name === "email") setEmail(value);
//   //     if (name === "password") setPassword(value);
//   //     //   this.setState({ [name]: value });
//   //   };

//   const onHandleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prev) => ({ ...prev, [name]: value }));
//   };

//   //   const onHandleSubmit = useCallback(
//   //     (event) => {
//   //       event.preventDefault();
//   //       match.url === "/register"
//   //         ? onRegister(name, email, password)
//   //         : onLogin(email, password);

//   //       setName("");
//   //       setEmail("");
//   //       setPassword("");
//   //     },
//   //     [name, email, password, match.url, onRegister, onLogin]
//   //   );

//   const onHandleSubmit = useCallback(
//     (event) => {
//       event.preventDefault();
//       match.url === "/auth/register" ? onRegister(user) : onLogin(user);
//       setUser({ email: "", password: "" });
//     },
//     [user, match.url, onRegister, onLogin]
//   );

//   return (
//     <div>
//       <form onSubmit={onHandleSubmit} autoComplete="off">
//         <TextField
//           type="email"
//           name="email"
//           onChange={onHandleChange}
//           value={user.email}
//           minLength="3"
//           required
//           label="Email"
//           variant="outlined"
//           id="outlined-basic"
//           className="marginRight"
//         />
//         <TextField
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={onHandleChange}
//           minLength="3"
//           required
//           label="Password"
//           variant="outlined"
//           id="outlined-basic"
//         />
//         <Button
//           type="submit"
//           className="registerBtn"
//           variant="contained"
//           color="primary"
//         >
//           {match.url === "/auth/register" ? "Sign up" : "Login"}
//         </Button>
//       </form>
//     </div>
//   );
// }

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
            <button
              onClick={() => dispatch(login(formik.values))}
              type="button"
              className="btn btn-lg btn-primary btn-block"
            >
              Login
            </button>
            <button
              onClick={() => dispatch(register(formik.values))}
              type="button"
              className="btn btn-lg btn-primary btn-block"
            >
              Register!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

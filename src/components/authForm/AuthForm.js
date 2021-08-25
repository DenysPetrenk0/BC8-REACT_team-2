import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
// import { error} from
import { register, login } from '../../redux/auth/authOperations';
// import { useRouteMatch } from "react-router-dom";
import * as Yup from 'yup';
import { getError } from '../../redux/auth/authSelectors';
import styles from './AuthForm.module.css';
import { loginGoogle } from '../../redux/auth/authActions';
import axios from 'axios';

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
  const { t } = useTranslation();
  // const match = useRouteMatch();

  // const login = useCallback(
  //   ({ email, password }) => {
  //     dispatch(login({ email, password }));
  //   },
  //   [dispatch]
  // );
  const responseGoogle = async response => {
    axios.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;
    console.log(`response`, response);
    dispatch(
      loginGoogle({
        email: response.profileObj.email,
        // tokenId: response.tokenObj.id_token,
        tokenId: response.accessToken,
      }),
    );
  };

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
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={styles.authTitle}>
          {t('Complete tasks and get the best gifts')}
        </h1>
        <div className={styles.authForm}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <p className={styles.authText}>
              {t('You can log in with your Google Account')}
            </p>

            <a href="https://kidslikev1.herokuapp.com/auth/google">
              {/* <GoogleLogin
                className={styles.googleBtn}
                clientId="551259095016-urgqjvcdnufatornmrupmab9ove5qhvs.apps.googleusercontent.com"
                buttonText="Google"
                isSignedIn={true}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              /> */}
              Google
            </a>
            <p className={styles.authText}>
              {t(
                'Also you can log in with your e-mail and password register in advance',
              )}
            </p>

            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                <span className={styles.formLabelStar}>*</span>E-mail
              </label>
              <input
                type="email"
                className={styles.formInput}
                name="email"
                placeholder="your@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="input-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="password">
                <span className={styles.formLabelStar}>*</span>
                {t('Password')}
              </label>
              <input
                type="password"
                className={styles.formInput}
                name="password"
                placeholder="*********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="input-feedback">{formik.errors.password}</div>
              )}
            </div>
            <div className={styles.wrapperButton}>
              <button
                onClick={() => dispatch(login(formik.values))}
                type="button"
                className={styles.authButton}
              >
                {t('Log in')}
              </button>
              <button
                onClick={() => dispatch(register(formik.values))}
                type="button"
                className={styles.authButton}
              >
                {t('Register')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

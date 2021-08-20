import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
// import { error} from
import { register, login } from '../../redux/auth/authOperations';
// import { useRouteMatch } from "react-router-dom";
import * as Yup from 'yup';
import { getError } from '../../redux/auth/authSelectors';
import styles from './AuthForm.module.css';

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
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 className={styles.authTitle}>
          Выполняй задания, получи классные призы!
        </h1>
        <div className={styles.authForm}>
          <form noValidate onSubmit={formik.handleSubmit}>
            <p className={styles.authText}>
              Вы можете авторизоваться с помощью Google Account:
            </p>

            <button className={styles.googleBtn} type="button">
              Google
            </button>
            <p className={styles.authText}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
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
              />
              {formik.errors.email && formik.touched.email && (
                <div className="input-feedback">{formik.errors.email}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="password">
                <span className={styles.formLabelStar}>*</span>Пароль
              </label>
              <input
                type="password"
                className={styles.formInput}
                name="password"
                placeholder="*********"
                value={formik.values.password}
                onChange={formik.handleChange}
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
                Войти
              </button>
              <button
                onClick={() => dispatch(register(formik.values))}
                type="button"
                className={styles.authButton}
              >
                Зарегистрироваться!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

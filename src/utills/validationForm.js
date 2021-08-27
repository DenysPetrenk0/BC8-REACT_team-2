import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('это обязательное поле'),
  password: Yup.string()
    .required('это обязательное поле')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'пароль должен включать цыфру'),
});

export default validationSchema;

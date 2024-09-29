import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleLogin = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleLogin}>
      <Form className={css.form}>
        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" autoComplete="off" id={emailFieldId} />
        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordFieldId} />
        <button className={css.btn} type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
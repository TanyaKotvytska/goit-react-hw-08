import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleRegister = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleRegister}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameFieldId} autoComplete="off" />
        <label htmlFor={emailFieldId} className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id={emailFieldId} autoComplete="off" />
        <label htmlFor={passwordFieldId} className={css.label}>
          Password
        </label>
        <Field type="password" name="password" id={passwordFieldId} />
        <button className={css.btn} type="submit">Registration</button>
      </Form>
    </Formik>
  );
};
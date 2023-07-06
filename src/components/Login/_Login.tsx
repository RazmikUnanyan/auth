import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./_Login.module.scss";
import { Button, HTag, Input } from "../_ui";
import { ILoginProps } from "./_Login.props";

export const Login: FC<ILoginProps> = ({ ...props }) => {
  const { values, touched, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Введите электронную почту"),
      password: Yup.string().required("Введите пароль"),
    }),
  });

  const isEmailError = errors.email && touched.email;
  const isPasswordError = errors.password && touched.password;

  return (
    <form onSubmit={handleSubmit} {...props}>
      <div className={styles.login}>
        <HTag tag="h2">Вход</HTag>
        <div className={styles.inputWrapper}>
          <Input
            error={isEmailError}
            value={values.email}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            placeholder="Почта"
            errorText={errors.email}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            error={isPasswordError}
            value={values.password}
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            errorText={errors.password}
          />
        </div>
      </div>
      <div className={styles.authFooter}>
        <div className={styles.checkboxWrapper}>
          <Input onChange={handleChange} name="rememberMe" checkboxLabel="Запомнить" type="checkbox" />
        </div>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};

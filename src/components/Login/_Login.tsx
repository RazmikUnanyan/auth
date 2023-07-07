import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { ILoginForm } from "../../interfaces";
import { Button, HTag, Input } from "../_ui";
import styles from "./_Login.module.scss";
import { ILoginProps } from "./_Login.props";

export const Login: FC<ILoginProps> = ({ ...props }) => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  const handleSubmitClick = (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setIsEmailError(!email);
      setIsPasswordError(!password);
    } else {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmitClick} {...props}>
      <div className={styles.login}>
        <HTag tag="h2">Вход</HTag>
        <div className={styles.inputWrapper}>
          <Input
            error={isEmailError && !formData.email}
            errorText="Введите электронную почту"
            value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            placeholder="Почта"
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            error={isPasswordError && !formData.password}
            errorText="Введите пароль"
            value={formData.password}
            onChange={handleChange}
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
      </div>
      <div className={styles.authFooter}>
        <div className={styles.checkboxWrapper}>
          <Input
            checked={formData.rememberMe}
            onChange={handleChange}
            name="rememberMe"
            checkboxLabel="Запомнить"
            type="checkbox"
          />
        </div>
        <Button type="submit">Войти</Button>
      </div>
    </form>
  );
};

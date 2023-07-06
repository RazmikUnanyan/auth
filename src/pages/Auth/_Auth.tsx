import React, { FC } from "react";
import { IAuthProps } from "./_Auth.props";
import styles from "./_Auth.module.scss";
import { Login } from "../../components";

export const Auth: FC<IAuthProps> = ({ ...props }) => (
  <div className={styles.auth} {...props}>
    <Login />
  </div>
);

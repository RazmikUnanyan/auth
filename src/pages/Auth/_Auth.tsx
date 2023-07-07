import React, { FC } from "react";

import { Login } from "../../components";
import styles from "./_Auth.module.scss";
import { IAuthProps } from "./_Auth.props";

export const Auth: FC<IAuthProps> = ({ ...props }) => (
  <div className={styles.auth} {...props}>
    <Login />
  </div>
);

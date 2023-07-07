import React, { FC } from "react";

import cn from "classnames";

import styles from "./_Input.module.scss";
import { IInputProps } from "./_Input.props";

export const Input: FC<IInputProps> = ({ errorText, error, checkboxLabel, type, ...props }) => {
  switch (type) {
    case "checkbox":
      return (
        <label className={styles.checkboxLabel}>
          <input type={type} className={styles.checkboxInput} {...props} />
          {checkboxLabel}
        </label>
      );
    default:
      return (
        <>
          <input type={type} className={cn(styles.input, { [styles.error]: error })} {...props} />
          {error && <div className={styles.errorText}>{errorText}</div>}
        </>
      );
  }
};

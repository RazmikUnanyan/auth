import React, { FC } from "react";

import cn from "classnames";

import styles from "./_Button.module.scss";
import { IButtonProps } from "./_Button.props";

export const Button: FC<IButtonProps> = ({ variant, children, ...props }) => (
  <button
    className={cn({
      [styles.primary]: variant === "primary",
      [styles.secondary]: variant === "secondary",
      [styles.outline]: variant === "outline",
    })}
    {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: "primary",
};

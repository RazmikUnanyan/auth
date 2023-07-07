import React, { FC } from "react";

import style from "./_HTag.module.scss";
import { HTagProps } from "./_HTag.props";

export const HTag: FC<HTagProps> = ({ tag, children, ...props }) => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={style.h1} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={style.h2} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={style.h3} {...props}>
          {children}
        </h3>
      );
    default:
      return <></>;
  }
};

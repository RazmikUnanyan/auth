import React, { FC, FunctionComponent } from "react";
import styles from "./_Layout.module.scss";
import { ILayoutProps } from "./_Layout.props";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => (
  <div {...props}>
    <div className={styles.container}>{children}</div>
  </div>
);

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );

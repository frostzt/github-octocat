import React from "react";

import cx from "classnames";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ children, extraClasses, to }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={to}>
        <div className={cx([styles.container, extraClasses ? extraClasses : null])}>{children}</div>
      </Link>
    </div>
  );
};

export default Button;

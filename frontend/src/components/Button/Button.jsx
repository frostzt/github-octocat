import React from "react";

import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ children, extraClasses }) => {
  return (
    <div className={cx([styles.container, extraClasses ? extraClasses : null])}>
      {children}
    </div>
  );
};

export default Button;

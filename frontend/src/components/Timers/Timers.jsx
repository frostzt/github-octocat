import React from "react";

// Styling
import cx from "classnames";
import styles from "./Timers.module.scss";

const Timers = ({ min, isSelected }) => {
  return (
    <div className={cx([styles.container, isSelected ? styles.selected : null])}>
      <div className={styles.content}>{min}:00</div>
    </div>
  );
};

export default Timers;

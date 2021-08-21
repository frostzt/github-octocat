import React from "react";

// Styling
import styles from "./Timers.module.scss";

const Timers = ({ min }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{min}:00</div>
    </div>
  );
};

export default Timers;

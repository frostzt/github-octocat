import React from "react";

// Styling
import styles from "./Features.module.scss";
import { MdUpdate } from "react-icons/md";
import { FaUserSecret, FaStopwatch } from "react-icons/fa";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feature}>
        <div className={styles.feature__icon}>
          <FaUserSecret />
        </div>
        <h2 className={styles.feature__text}>
          Completely
          <br />
          Anonymous
        </h2>
      </div>
      <div className={styles.feature}>
        <div className={styles.feature__icon}>
          <MdUpdate />
        </div>
        <h2 className={styles.feature__text}>
          Keep updated
          <br />
          with tasks
        </h2>
      </div>
      <div className={styles.feature}>
        <div className={styles.feature__icon}>
          <FaStopwatch />
        </div>
        <h2 className={styles.feature__text}>
          Quick and
          <br />
          easy
        </h2>
      </div>
    </div>
  );
};

export default Features;

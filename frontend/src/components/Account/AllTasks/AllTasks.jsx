import React, { Fragment } from "react";

// Styling
import styles from "./AllTasks.module.scss";

const AllTasks = ({ switchStates }) => {
  return (
    <Fragment>
      <div onClick={switchStates} className={styles.fallback} />
      <div className={styles.container}></div>
    </Fragment>
  );
};

export default AllTasks;

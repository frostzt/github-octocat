import React, { useState } from "react";

// Styling
import cx from "classnames";
import styles from "./Task.module.scss";

const Task = ({ title }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={styles.container}>
      <h3
        onClick={() => setCompleted((prev) => !prev)}
        className={cx([styles.title, completed ? styles.completed : null])}
      >
        {title}
      </h3>
    </div>
  );
};

export default Task;

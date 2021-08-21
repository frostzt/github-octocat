import React, { Fragment, useState } from "react";

// Styling
import styles from "./AllTasks.module.scss";

// Components
import Task from "../Task/Task";

const AllTasks = ({ user, createTask, switchStates }) => {
  const [title, setTitle] = useState("");

  const startTask = (e) => {
    e.preventDefault();
    createTask(e, title);
  };

  return (
    <Fragment>
      <div onClick={switchStates} className={styles.fallback} />
      <div className={styles.container}>
        <div className={styles.list}>
          {user.tasks && user.tasks.map((task) => <Task key={task.title} title={task.title} />)}
        </div>
        <div className={styles.creator}>
          <input
            style={{ width: "40rem" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your task here..."
          />
          <button className={styles.btn} onClick={(e) => startTask(e)}>
            Create
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AllTasks;

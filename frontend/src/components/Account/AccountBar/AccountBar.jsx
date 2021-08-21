import { Link } from "react-router-dom";
import React, { Fragment, useContext, useState } from "react";

// Styling
import styles from "./AccountBar.module.scss";

// Contexts
import AuthContext from "../../../contexts/user.context";

// Components
import AllTasks from "../AllTasks/AllTasks";

const AccountBar = () => {
  const [showTasks, setShowTasks] = useState(false);

  const { user, createTask } = useContext(AuthContext);

  const switchStates = () => {
    setShowTasks((prev) => !prev);
  };

  return (
    <Fragment>
      {showTasks ? <AllTasks user={user} createTask={createTask} switchStates={switchStates} /> : null}
      <div className={styles.container}>
        {!user && (
          <Link style={{ textDecoration: "none", display: "inline-block" }} to="/auth">
            <div className={styles.login}>Login</div>
          </Link>
        )}
        {user && (
          <>
            <div className={styles.user}>Welcome {user.name}</div>
            <div onClick={switchStates} className={styles.alltasks}>
              All Tasks
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
};

export default AccountBar;

import React from "react";
import Pomodoro from "../../components/Pomodoro/Pomodoro";

// Styling
import styles from "./App.module.scss";

const AppPage = () => {
  return (
    <div className={styles.container}>
      <Pomodoro />
    </div>
  );
};

export default AppPage;

import React, { useState } from "react";
import Pomodoro from "../../components/Pomodoro/Pomodoro";
import QuoteGenerator from "../../components/QuoteGenerator/QuoteGenerator";

// Styling
import styles from "./App.module.scss";

const AppPage = () => {
  const [start, setStart] = useState(false);

  // Handlers
  const changeStart = () => {
    setStart((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {start ? <QuoteGenerator /> : null}
      <Pomodoro start={start} changeStart={changeStart} />
    </div>
  );
};

export default AppPage;

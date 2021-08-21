import React, { useState } from "react";

// Components
import Pomodoro from "../../components/Pomodoro/Pomodoro";
import AccountBar from "../../components/Account/AccountBar/AccountBar";
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
      <AccountBar />
      {start ? <QuoteGenerator /> : null}
      <Pomodoro start={start} changeStart={changeStart} />
    </div>
  );
};

export default AppPage;

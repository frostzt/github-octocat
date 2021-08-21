import React, { useState, useEffect } from "react";

// Components
import Timers from "../Timers/Timers";
import { ActivateButton } from "../Button/Button";

// Styling
import styles from "./Pomodoro.module.scss";

const Pomodoro = () => {
  const [min, setMin] = useState(0);
  const [secs, setSecs] = useState(0);
  const [focMin, setFocMin] = useState(0);
  const [relMin, setRelMin] = useState(0);
  const [start, setStart] = useState(false);
  const [isFocusing, setIsFocusing] = useState(true);

  const assignMins = (to) => {
    setMin(to);
    setFocMin(to);
  };

  const changeState = () => {
    if (focMin > 0 && relMin > 0) {
      setStart((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (start) {
      let pomodoroInterval = setInterval(() => {
        clearInterval(pomodoroInterval);

        if (secs === 0) {
          if (min !== 0) {
            setSecs(59);
            setMin(min - 1);
          } else {
            const newMinutes = isFocusing ? relMin : focMin;
            setMin(newMinutes);
            setIsFocusing(!isFocusing);

            // Reinitialize
            setStart(false);
            setStart(true);
          }
        } else {
          setSecs(secs - 1);
        }
      }, 1000);
    }
  }, [secs, start]);

  // Convert the strings to right format
  const showMin = min < 10 ? `0${min}` : min;
  const showSecs = secs < 10 ? `0${secs}` : secs;

  return (
    <div className={styles.container}>
      {start ? null : <div className={styles.title}>Set your timer</div>}
      <div className={styles.counter}>
        {showMin}:{showSecs}
      </div>
      {start ? null : (
        <div className={styles.selectors}>
          <h3 className={styles.selectors__heading}>Focus Time</h3>
          <div className={styles.selectors__focus}>
            <div onClick={() => assignMins(25)}>
              <Timers min={25} />
            </div>
            <div onClick={() => assignMins(30)}>
              <Timers min={30} />
            </div>
            <div onClick={() => assignMins(45)}>
              <Timers min={45} />
            </div>
          </div>
          <div className={styles.selectors__relax}>
            <h3 className={styles.selectors__heading}>Relax Time</h3>
            <div className={styles.selectors__focus}>
              <div onClick={() => setRelMin(5)}>
                <Timers min={5} />
              </div>
              <div onClick={() => setRelMin(10)}>
                <Timers min={10} />
              </div>
              <div onClick={() => setRelMin(15)}>
                <Timers min={15} />
              </div>
            </div>
          </div>
        </div>
      )}
      <ActivateButton extraClasses={styles.btn} handler={changeState}>
        {start ? "Pause" : "Go"}
      </ActivateButton>
    </div>
  );
};

export default Pomodoro;

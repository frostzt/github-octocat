import React, { useState, useEffect, Fragment, useRef } from "react";

// Components
import Timers from "../Timers/Timers";
import { ActivateButton } from "../Button/Button";
import { FOCUS_ALL_SONGS, RELAX_ALL_SONGS } from "./AllSongs";

// Styling
import cx from "classnames";
import styles from "./Pomodoro.module.scss";

const Pomodoro = () => {
  const audioRef = useRef();

  // States
  const [min, setMin] = useState(0);
  const [secs, setSecs] = useState(0);
  const [focMin, setFocMin] = useState(0);
  const [relMin, setRelMin] = useState(0);
  const [start, setStart] = useState(false);
  const [isFocusing, setIsFocusing] = useState(true);

  // Audio Player
  const focusAllTracks = FOCUS_ALL_SONGS;
  const relaxAllTracks = RELAX_ALL_SONGS;

  // Handlers
  const assignMins = (to) => {
    setMin(to);
    setFocMin(to);
  };

  const changeState = () => {
    if (focMin > 0 && relMin > 0) {
      if (start) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setStart((prevState) => !prevState);
    }
  };

  // Side Effects
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

            if (isFocusing) {
              audioRef.current.src = relaxAllTracks[0].url;
              audioRef.current.play();
            } else {
              audioRef.current.src = focusAllTracks[0].url;
              audioRef.current.play();
            }

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
    <Fragment>
      <div className={styles.player}>
        <audio ref={audioRef} src={focusAllTracks[0].url} type="audio/mp3" controls></audio>
      </div>
      <div className={styles.container}>
        {start ? null : <div className={styles.title}>Set your timer</div>}
        <div className={cx([styles.counter, start ? styles.started : null])}>
          {showMin}:{showSecs}
        </div>
        {start ? null : (
          <div className={styles.selectors}>
            <h3 className={styles.selectors__heading}>Focus Time</h3>
            <div className={styles.selectors__focus}>
              <div onClick={() => assignMins(25)}>
                <Timers isSelected={min === 25 ? true : false} min={25} />
              </div>
              <div onClick={() => assignMins(30)}>
                <Timers isSelected={min === 30 ? true : false} min={30} />
              </div>
              <div onClick={() => assignMins(45)}>
                <Timers isSelected={min === 45 ? true : false} min={45} />
              </div>
            </div>
            <div className={styles.selectors__relax}>
              <h3 className={styles.selectors__heading}>Relax Time</h3>
              <div className={styles.selectors__focus}>
                <div onClick={() => setRelMin(5)}>
                  <Timers isSelected={relMin === 5 ? true : false} min={5} />
                </div>
                <div onClick={() => setRelMin(10)}>
                  <Timers isSelected={relMin === 10 ? true : false} min={10} />
                </div>
                <div onClick={() => setRelMin(15)}>
                  <Timers isSelected={relMin === 15 ? true : false} min={15} />
                </div>
              </div>
            </div>
          </div>
        )}
        <ActivateButton extraClasses={styles.btn} handler={changeState}>
          {start ? "Pause" : "Go"}
        </ActivateButton>
      </div>
    </Fragment>
  );
};

export default Pomodoro;

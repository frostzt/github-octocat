import React, { useState } from "react";

// Images
import Mobile from "./mobile.png";

// Styles
import cx from "classnames";
import styles from "./Sounds.module.scss";
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs";

const Sounds = () => {
  const [isRelaxPlaying, setIsRelaxPlaying] = useState(false);
  const [isFocusPlaying, setIsFocusPlaying] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sound just like you feel.</h2>
      <div className={styles.content}>
        <div className={styles.buttons}>
          <div className={styles.buttons__container}>
            <div
              onClick={() => setIsRelaxPlaying((prevState) => !prevState)}
              className={cx([styles.buttons__container__btn, isRelaxPlaying ? styles.toggle : null])}
            >
              {isRelaxPlaying ? <BsFillPauseFill /> : <BsPlayFill />}
            </div>
            <p className={styles.buttons__container__desc}>Relaxing</p>
          </div>
          <div className={styles.buttons__container}>
            <div
              onClick={() => setIsFocusPlaying((prevState) => !prevState)}
              className={cx([styles.buttons__container__btn, isFocusPlaying ? styles.toggle : null])}
            >
              {isFocusPlaying ? <BsFillPauseFill /> : <BsPlayFill />}
            </div>
            <p className={styles.buttons__container__desc}>Focusing</p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.imageContainer__image} src={Mobile} alt="Mobile Application" />
        </div>
      </div>
    </div>
  );
};

export default Sounds;

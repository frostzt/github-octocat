import React from "react";
import styles from "./Header.module.scss";

// Images
import Box from "./box.png";
import Notepad from "./notepad.png";

// Components
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.logo__text}>Octotime</div>
      </div>
      <div className={styles.maintext}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            time management
            <br />
            <span className={styles.heading__span}>just made smarter</span>
          </h1>
          <Button extraClasses={styles.maintext__btn}>Get Started</Button>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.imageContainer__image} src={Notepad} alt="Notepad" />
          <img className={styles.imageContainer__box} id={styles.box_1} src={Box} alt="Box" />
          <img className={styles.imageContainer__box} id={styles.box_2} src={Box} alt="Box" />
          <img className={styles.imageContainer__box} id={styles.box_3} src={Box} alt="Box" />
        </div>
      </div>
    </div>
  );
};

export default Header;

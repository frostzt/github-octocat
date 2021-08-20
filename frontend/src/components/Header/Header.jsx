import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";

// Images
import Box from "./box.png";
import Notepad from "./notepad.png";

// Varients
import { containerVarient, childrenVarient } from "./Header.varients";

// Components
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <motion.div variants={childrenVarient} initial="initial" animate="animated" className={styles.logo__text}>
          Octotime
        </motion.div>
      </div>
      <motion.div variants={containerVarient} initial="initial" animate="animated" className={styles.maintext}>
        <motion.div className={styles.content}>
          <motion.h1 variants={childrenVarient} className={styles.heading}>
            time management
            <br />
            <span className={styles.heading__span}>just made smarter</span>
          </motion.h1>
          <motion.div variants={childrenVarient}>
            <Button extraClasses={styles.maintext__btn}>Get Started</Button>
          </motion.div>
        </motion.div>
        <motion.div variants={childrenVarient} className={styles.imageContainer}>
          <img className={styles.imageContainer__image} src={Notepad} alt="Notepad" />
          <img className={styles.imageContainer__box} id={styles.box_1} src={Box} alt="Box" />
          <img className={styles.imageContainer__box} id={styles.box_2} src={Box} alt="Box" />
          <img className={styles.imageContainer__box} id={styles.box_3} src={Box} alt="Box" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;

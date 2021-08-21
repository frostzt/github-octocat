import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>Octotime</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <div className={styles.links__con}>
            <Link className={styles.links__con__link} to="/about">
              About
            </Link>
          </div>
          <div className={styles.links__con}>
            <Link className={styles.links__con__link} to="/attributions">
              Attributions
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>Copyright&#169; 2021 Octotime</div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

// Styling
import styles from "./QuoteGenerator.module.scss";

import { QUOTES } from "./Quotes";

const QuoteGenerator = () => {
  const random = Math.floor(Math.random() * 4);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{QUOTES[random].text}</h2>
    </div>
  );
};

export default QuoteGenerator;

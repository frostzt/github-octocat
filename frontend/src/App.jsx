import Test from "./components/test/test";

import styles from "./styles/app.module.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className={styles.title}>Hello there!</h1>
      <Test />
    </div>
  );
};

export default App;

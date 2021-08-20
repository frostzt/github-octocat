import styles from "./styles/app.module.scss";

// Components
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Features />
    </div>
  );
};

export default App;

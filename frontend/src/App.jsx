import { Switch, Route } from "react-router-dom";

// Pages
import AppPage from "./pages/App/App";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/app" component={AppPage} />
      </Switch>
    </div>
  );
};

export default App;

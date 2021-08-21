import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;

import { Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/user.context";

// Pages
import AppPage from "./pages/App/App";
import Auth from "./pages/Auth/Auth";
import Homepage from "./pages/Homepage/Homepage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <AuthContextProvider>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/app" component={AppPage} />
          <Route exact path="/auth" component={Auth} />
        </AuthContextProvider>
      </Switch>
    </div>
  );
};

export default App;

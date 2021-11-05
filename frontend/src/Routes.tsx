
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
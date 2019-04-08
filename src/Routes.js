import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RadarPage from "./Pages/RadarPage";
import PlanPage from "./Pages/PlanPage";
import AdminPage from "./Pages/AdminPage";
import ProfilePage from "./Pages/ProfilePage";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/radar" component={RadarPage} />
        <Route path="/plan" component={PlanPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

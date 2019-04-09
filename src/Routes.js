import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import RadarPage from "./Pages/RadarPage/RadarPage";
import PlanPage from "./Pages/PlanPage/PlanPage";
import AdminPage from "./Pages/AdminPage/AdminPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";

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

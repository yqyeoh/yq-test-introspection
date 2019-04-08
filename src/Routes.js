import React from "react";
import { Route, Switch } from "react-router-dom";
import ReligiousMinorities from "./Radar/ReligiousMinorities";
import FullChart from "./Radar/FullChart";
import DiversityAndInclusion from "./Radar/DiversityAndInclusion";
import SocietyAndPrivilege from "./Radar/SocietyAndPrivilege";
import ClimateInjustice from "./Radar/ClimateInjustice";
import EquitableTech from "./Radar/EquitableTech";
import SexualOrientationIdentity from "./Radar/SexualOrientationIdentity";
import RacialMinorities from "./Radar/RacialMinorities";
import EconomicJustice from "./Radar/EconomicJustice";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/full" component={FullChart} />
        <Route
          path="/diversityandinclusion"
          component={DiversityAndInclusion}
        />
        <Route path="/religiousminorities" component={ReligiousMinorities} />
        <Route path="/societyandprivilege" component={SocietyAndPrivilege} />
        <Route path="/climateinjustice" component={ClimateInjustice} />
        <Route path="/equitabletech" component={EquitableTech} />
        <Route
          path="/sexualorientationidentity"
          component={SexualOrientationIdentity}
        />
        <Route path="/racialminorities" component={RacialMinorities} />
        <Route path="/economicjustice" component={EconomicJustice} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

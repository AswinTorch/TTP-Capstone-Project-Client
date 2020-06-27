import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Enrollment from "../Enrollment/Enrollment";
import Finance from "../Finance/Finance";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/enrollment" component={Enrollment} />
      <Route exact path="/finances" component={Finance} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardContainer from "../Dashboard/DashboardContainer";
import EnrollmentContainer from "../Enrollment/EnrollmentContainer";
import Finance from "../Finance/Finance";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardContainer} />
      <Route exact path="/dashboard" component={DashboardContainer} />
      <Route exact path="/enrollment" component={EnrollmentContainer} />
      <Route exact path="/finances" component={Finance} />
    </Switch>
  );
};

export default RoutesView;

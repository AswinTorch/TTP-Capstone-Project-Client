import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardContainer from "../Dashboard/DashboardContainer";
import EnrollmentContainer from "../Enrollment/EnrollmentContainer";

const RoutesView = () =>
{
    return (
        <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/enrollment" component={EnrollmentContainer} />
        </Switch>
    );
}

export default RoutesView;
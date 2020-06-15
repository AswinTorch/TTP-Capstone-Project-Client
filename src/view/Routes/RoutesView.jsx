import React from "react";
import { Switch, Route } from "react-router-dom";

import DashboardContainer from "../Dashboard/DashboardContainer";
import EnrollmentContainer from "../Enrollment/EnrollmentContainer";
import FinanceContainer from "../Finance/FinanceContainer";

const RoutesView = () =>
{
    return (
        <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/enrollment" component={EnrollmentContainer} />
            <Route exact path="/finances" component={FinanceContainer} />
        </Switch>
    );
}

export default RoutesView;
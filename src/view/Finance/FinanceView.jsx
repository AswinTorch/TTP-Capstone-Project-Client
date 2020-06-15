import React from "react";

import MoneyReceivedView from "./MoneyReceivedView";
import MoneyOwedView from "./MoneyOwedView";

const FinanceView = (props) =>
{
    return (
        <div className="container-fluid p-3">
            <div>
                <h1>Finances</h1>
            </div>

            <div className="row">
                <MoneyReceivedView />
                <MoneyOwedView />
            </div>
        </div>
    );
}

export default FinanceView;
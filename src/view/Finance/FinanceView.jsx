import React from "react";

import MoneyReceivedView from "./FinanceOverview/MoneyReceivedView";
import MoneyOwedContainer from "./FinanceOverview/MoneyOwedContainer";

const FinanceView = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h2 className="text-muted">Finance</h2>
      </div>

      <div className="row pt-3">
        <MoneyReceivedView />
        <MoneyOwedContainer />
      </div>
    </div>
  );
};

export default FinanceView;

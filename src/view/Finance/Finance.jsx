import React from "react";

import MoneyReceived from "./FinanceOverview/MoneyReceived";
import MoneyOwedContainer from "./FinanceOverview/MoneyOwedContainer";
import FinanceDetailsContainer from "./FinanceDetails/FinanceDetailsContainer";

const Finance = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h2 className="text-muted">Finance</h2>
      </div>

      <div className="row pt-3">
        <MoneyReceived />
        <MoneyOwedContainer />
      </div>

      <FinanceDetailsContainer />
    </div>
  );
};

export default Finance;

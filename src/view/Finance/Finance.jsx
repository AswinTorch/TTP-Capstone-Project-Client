import React from "react";

import MoneyReceived from "./FinanceOverview/MoneyReceived";
import MoneyOwed from "./FinanceOverview/MoneyOwed";
import FinanceDetailsContainer from "./FinanceDetails/FinanceDetailsContainer";

const Finance = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h2 className="text-muted">Finance</h2>
      </div>

      <div className="row pt-3">
        <MoneyReceived />
        <MoneyOwed />
      </div>

      <FinanceDetailsContainer />
    </div>
  );
};

export default Finance;

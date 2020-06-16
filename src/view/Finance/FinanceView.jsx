import React from "react";

import MoneyReceivedView from "./MoneyReceivedView";
import MoneyOwedView from "./MoneyOwedView";

const FinanceView = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h1>Finances</h1>
      </div>

      <div className="row pt-3">
        <MoneyReceivedView />
        <MoneyOwedView />
      </div>
    </div>
  );
};

export default FinanceView;

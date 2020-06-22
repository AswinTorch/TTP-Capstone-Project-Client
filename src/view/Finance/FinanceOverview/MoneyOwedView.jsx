import React from "react";

const MoneyOwedView = ({ moneyOwed }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card shadow border-danger border-3 border-bottom-0 border-top-0 border-right-0 pt-2 pb-2 mb-3">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                Money Owed
              </div>
              <h6 className="card-subtitle mt-3">
                ${Number(moneyOwed).toFixed(2)}
              </h6>
            </div>
            <div className="col-auto">
              <i className="fas fa-dollar-sign fa-2x text-light"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyOwedView;

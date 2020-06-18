import React from "react";

const MoneyReceivedView = (props) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card shadow border-success border-3 border-bottom-0 border-top-0 border-right-0 pt-2 pb-2 mb-3">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Money Received
              </div>
              <h6 className="card-subtitle mt-3">$420.69</h6>
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

export default MoneyReceivedView;

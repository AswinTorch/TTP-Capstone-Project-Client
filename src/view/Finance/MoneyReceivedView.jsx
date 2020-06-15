import React from "react";

const MoneyReceivedView = (props) =>
{
    return (
        <div className="col-md-3 col-sm-6">
            <div className="card shadow border-success border-3 border-bottom-0 border-top-0 border-right-0 pt-2 pb-2">
                <div className="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <h5 className="card-title text-success">Money Received</h5>
                            <h6 className="card-subtitle mt-3">$420.69</h6>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-light"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoneyReceivedView;
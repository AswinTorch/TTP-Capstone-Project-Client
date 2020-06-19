import React from "react";
import FinanceDetailsItem from "./FinanceDetailsItem";

/**
 * Represents the entire view of the user's transaction history
 * This component controls the type of display to use
 * 
 * Receives props (fetched data) from FinanceDetailsContainer
 * Passes props (fetched data) down to FinanceDetailsItem to generate
 */
const FinanceDetailsView = (props) =>
{
    return (
        <div className="card mt-4 shadow rounded border-0">
            <h5 className="card-header text-primary">Financial Details</h5>
            <div className="">
                <ul className="list-group rounded">
                    <div>
                        {props.student.transaction_history &&
                        props.student.transaction_history.length !== 0 ? (
                        // Shows fetched data if it exists

                        props.student.transaction_history.map((transaction) => (
                            <FinanceDetailsItem
                                transaction={transaction}
                                key={transaction}
                            />
                        ))
                        ) : (
                        <p className="pl-4 pt-3 pb-2">
                            No transaction history.
                        </p>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default FinanceDetailsView;
import React from "react";
import Table from "react-bootstrap/Table";
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
            <h5 className="card-header text-primary">Transaction History</h5>
            <Table striped bordered responsive size="sm">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Action</th>
                        <th>Date</th>
                        <th>Transaction Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {props.student.transaction_history &&
                    props.student.transaction_history.length !== 0 ? (
                    // Shows fetched data if it exists

                    props.student.transaction_history.map((transaction) => (
                        <FinanceDetailsItem
                            transaction={transaction}
                            key={transaction.package.course_name}
                        />
                    ))
                    ) : (
                        <p className="pl-4 pt-3 pb-2">
                            No transaction history.
                        </p>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default FinanceDetailsView;
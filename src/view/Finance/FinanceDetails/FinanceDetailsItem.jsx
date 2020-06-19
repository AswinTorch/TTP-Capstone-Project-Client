import React, { useState } from "react";
import firebase from "../../../firebase";

/**
 * Represents a single list item in FinanceDetailsView
 * This component controls how and what type of list item is displayed
 * 
 * Receives props (fetched data) from FinanceDetailsView and renders it
 */
const FinanceDetailsItem = ({ transaction }) =>
{
    const action = transaction.action;
    const date = transaction.date;
    const course = transaction.package;

    const calculateTransactionAmt = (action, course) =>
    {
        let amount = 0; 
        let symbol = "";

        amount = parseInt(course.units) * 150;

        switch(action)
        {
            case "ADD_COURSE":
                symbol = "-";
                break;
            case "DROP_COURSE":
                symbol = "+";
                break;
            default: break;
        }

        return symbol + amount;
    }

    return (
        <tr>
            <td>{course.course_identifier} {course.course_number}</td>
            <td>{action}</td>
            <td>{date}</td>
            <td>{calculateTransactionAmt(action, course)}</td>
        </tr>
    );
}

export default FinanceDetailsItem;
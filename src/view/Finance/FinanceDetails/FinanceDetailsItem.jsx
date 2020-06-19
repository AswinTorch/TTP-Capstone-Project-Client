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
    const transactionPkg = transaction.package;

    const getCourseInfo = (transactionPkg) =>
    {
        if(transactionPkg.constructor === Object) 
        {
            return (`${transactionPkg.course_identifier} ${transactionPkg.course_number}`);
        }
        
        if(transactionPkg.length === 2)
        {
            let course1 = transactionPkg[0];
            let course2 = transactionPkg[1];

            let prevCourse = `${course1.course_identifier} ${course1.course_number}`;
            let newCourse = `${course2.course_identifier} ${course2.course_number}`;

            return `${prevCourse} to ${newCourse}`;
        }
        return "N/A";
    }

    const calculateTransactionAmt = (action, transactionPkg) =>
    {
        let amount = 0; 
        let symbol = "";

        if(transactionPkg.constructor === Object)
        {
            amount = parseInt(transactionPkg.units) * 150;
        }
        
        if(transactionPkg.length === 2)
        {
            let course1 = transactionPkg[0];
            let course2 = transactionPkg[1];
            let course1Cost = parseInt(course1.units) * 150;
            let course2Cost = parseInt(course2.units) * 150;

            amount =  course1Cost - course2Cost;
            if(amount > 0) symbol = "+";
        }

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
            <td>{getCourseInfo(transactionPkg)}</td>
            <td>{action}</td>
            <td>{date}</td>
            <td>{calculateTransactionAmt(action, transactionPkg)}</td>
        </tr>
    );
}

export default FinanceDetailsItem;
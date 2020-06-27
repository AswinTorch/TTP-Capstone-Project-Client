import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../../firebase";
import Table from "react-bootstrap/Table";
import { fetchStudentThunk } from "../../../state/enrollment/thunks";

/**
 * Smart container for financial details component
 *
 * Fetches user data and displays details on cost of courses
 * Passes props down to:
 * - FinanceDetailsView
 */
const FinanceDetails = (props) => {
  const student = useSelector((state) => state.enrollment.student);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = firebase.auth().currentUser.uid;
    dispatch(fetchStudentThunk(id));
  }, [dispatch]);

  return <FinanceDetailsView student={student} />;
};

/**
 * Represents the entire view of the user's transaction history
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from FinanceDetails
 * Passes props (fetched data) down to FinanceDetailsItem to generate
 */
const FinanceDetailsView = ({ student }) => {
  return (
    <div className="card mt-4 shadow rounded border-0">
      <h5 className="card-header text-primary">Transaction History</h5>
      <Table striped bordered hover responsive className="py-4">
        <thead>
          <tr>
            <th>Course</th>
            <th>Action</th>
            <th>Date</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
          {student.transaction_history &&
          student.transaction_history.length !== 0 ? (
            // Shows fetched data if it exists

            student.transaction_history.map((transaction) => (
              <FinanceDetailsItem
                transaction={transaction}
                key={transaction.date}
              />
            ))
          ) : (
            <tr className="pl-4 pt-3 pb-2">
              <td colSpan="4">No transaction history.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

/**
 * Represents a single list item in FinanceDetailsView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from FinanceDetailsView and renders it
 */
const FinanceDetailsItem = ({ transaction }) => {
  const action = transaction.action;
  const date = transaction.date;
  const transactionPkg = transaction.package;

  const getCourseInfo = (transactionPkg) => {
    if (transactionPkg.constructor === Object) {
      return `${transactionPkg.course_identifier} ${transactionPkg.course_number}`;
    }

    if (transactionPkg.length === 2) {
      let course1 = transactionPkg[0];
      let course2 = transactionPkg[1];

      let prevCourse = `${course1.course_identifier} ${course1.course_number}`;
      let newCourse = `${course2.course_identifier} ${course2.course_number}`;

      return `${prevCourse} to ${newCourse}`;
    }
    return "N/A";
  };

  const calculateTransactionAmt = (action, transactionPkg) => {
    let amount = 0;
    let symbol = "";

    if (transactionPkg.constructor === Object) {
      amount = parseInt(transactionPkg.units) * 150;
    }

    if (transactionPkg.length === 2) {
      let course1 = transactionPkg[0];
      let course2 = transactionPkg[1];
      let course1Cost = parseInt(course1.units) * 150;
      let course2Cost = parseInt(course2.units) * 150;

      amount = course1Cost - course2Cost;
      if (amount > 0) symbol = "+";
    }

    switch (action) {
      case "ADD_COURSE":
        symbol = "-";
        break;
      case "DROP_COURSE":
        symbol = "+";
        break;
      default:
        break;
    }

    return `${symbol}$${amount}`;
  };

  return (
    <tr>
      <td>{getCourseInfo(transactionPkg)}</td>
      <td>{action}</td>
      <td>{date}</td>
      <td>{calculateTransactionAmt(action, transactionPkg)}</td>
    </tr>
  );
};

// Export our store-connected container by default
export default FinanceDetails;

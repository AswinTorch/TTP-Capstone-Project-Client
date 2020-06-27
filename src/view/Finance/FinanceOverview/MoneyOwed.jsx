import React, { useEffect } from "react";

import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";

import { useDispatch, useSelector } from "react-redux";

/**
 * Smart container for money owed component
 *
 * Fetches user data and calculates cost of classes based on credit
 * Passes props down to:
 * - MoneyOwedView
 */
const MoneyOwed = (props) => {
  const student = useSelector((state) => state.enrollment.student);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = firebase.auth().currentUser.uid;
    dispatch(fetchStudentThunk(id));
  }, [dispatch]);

  const calculateMoneyOwed = (student) => {
    let totalCredit = 0;

    if (student.enrolled_courses === undefined) return "N/A";
    else {
      let courses = student.enrolled_courses;
      courses.forEach((course) => {
        totalCredit += parseInt(course.units);
      });
      return totalCredit * 150;
    }
  };

  return <MoneyOwedView moneyOwed={calculateMoneyOwed(student)} />;
};

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

// Export our store-connected container by default
export default MoneyOwed;

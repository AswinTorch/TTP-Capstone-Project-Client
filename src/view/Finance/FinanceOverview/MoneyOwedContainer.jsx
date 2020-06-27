import React, { useEffect } from "react";

import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";

import MoneyOwedView from "./MoneyOwedView";
import { useDispatch, useSelector } from "react-redux";

/**
 * Smart container for money owed component
 *
 * Fetches user data and calculates cost of classes based on credit
 * Passes props down to:
 * - MoneyOwedView
 */
const MoneyOwedContainer = (props) => {
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

// Export our store-connected container by default
export default MoneyOwedContainer;

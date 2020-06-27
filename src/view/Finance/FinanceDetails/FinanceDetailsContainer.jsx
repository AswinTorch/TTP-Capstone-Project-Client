import React, { useEffect } from "react";
import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import FinanceDetailsView from "./FinanceDetailsView";

/**
 * Smart container for financial details component
 *
 * Fetches user data and displays details on cost of courses
 * Passes props down to:
 * - FinanceDetailsView
 */
const FinanceDetailsContainer = (props) => {
  const student = useSelector((state) => state.enrollment.student);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = firebase.auth().currentUser.uid;
    dispatch(fetchStudentThunk(id));
  }, [dispatch]);

  return <FinanceDetailsView student={student} />;
};

// Export our store-connected container by default
export default FinanceDetailsContainer;

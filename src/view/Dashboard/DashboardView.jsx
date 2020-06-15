import React from "react";
import firebase from "../../firebase";
import "../App/App.css";

import EnrolledCoursesView from "../Enrollment/EnrolledCoursesView";
import MoneyReceivedView from "../Finance/MoneyReceivedView";
import MoneyOwedView from "../Finance/MoneyOwedView";

const DashboardView = (props) => {
  return (
    <div className="container-fluid p-4">
      <div class="d-flex justify-content-between pb-3">
        <div>
          <h1 className="">Dashboard</h1>
        </div>
        <div>
          <button className="btn btn-primary text-right mt-2">
            Generate Transcript
          </button>
        </div>
      </div>

      <div className="row">
        <MoneyReceivedView />
        <MoneyOwedView />
      </div>

      <EnrolledCoursesView />

      <div className="card mt-4 shadow border-0">
        <h5 className="card-header text-info">Assignments</h5>
        <div className="card-body">
          You do not have any assignments for today.
        </div>
      </div>

      <button
        onClick={() => firebase.auth().signOut()}
        className="btn btn-dark mt-4"
      >
        Sign Out
      </button>
    </div>
  );
};

export default DashboardView;

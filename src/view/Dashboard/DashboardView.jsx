import React from "react";
import "../App/App.css";
import EnrolledCoursesContainer from "../Enrollment/EnrolledCourses/EnrolledCoursesContainer";
import MoneyReceivedView from "../Finance/MoneyReceivedView";
import MoneyOwedView from "../Finance/MoneyOwedView";

const DashboardView = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div className="d-flex justify-content-between pb-3">
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

      <EnrolledCoursesContainer />

      <div className="card mt-4 shadow border-0">
        <h5 className="card-header text-info">Assignments</h5>
        <div className="card-body">
          You do not have any assignments for today.
        </div>
      </div>
    </div>
  );
};

export default DashboardView;

import React from "react";
import "../App/App.css";
import EnrolledCoursesContainer from "../Enrollment/EnrolledCourses/EnrolledCoursesContainer";
import MoneyReceivedView from "../Finance/FinanceOverview/MoneyReceivedView";
import MoneyOwedContainer from "../Finance/FinanceOverview/MoneyOwedContainer";

const Dashboard = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div className="d-flex justify-content-between pb-3">
        <div>
          <h2 className="text-muted">Dashboard</h2>
        </div>
        <div>
          <button className="btn btn-primary text-right mt-2">
            Generate Transcript
          </button>
        </div>
      </div>

      <div className="row">
        <MoneyReceivedView />
        <MoneyOwedContainer />
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

export default Dashboard;
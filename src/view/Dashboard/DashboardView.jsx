import React from "react";
import firebase from "../../firebase";
import "../App/App.css";

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
        <div className="col-md-3 col-sm-6">
          <div className="card shadow border-success border-3 border-bottom-0 border-top-0 border-right-0 pt-2 pb-2">
            <div className="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <h5 className="card-title text-success">Money Received</h5>
                  <h6 className="card-subtitle mt-3">$420.69</h6>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-light"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card shadow border-danger border-3 border-bottom-0 border-top-0 border-right-0 pt-2 pb-2">
            <div className="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <h5 className="card-title text-danger">Money Owed</h5>
                  <h6 className="card-subtitle mt-3">$40,000.00</h6>
                </div>
                <div class="col-auto">
                  <i class="fas fa-dollar-sign fa-2x text-light"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 shadow border-0">
        <h5 className="card-header text-primary">Your Courses</h5>
        <div className="card-body">
          You are not enrolled in any courses at this time.
        </div>
      </div>

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

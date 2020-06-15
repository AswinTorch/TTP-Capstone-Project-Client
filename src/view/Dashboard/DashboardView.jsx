import React from "react";
import firebase from "../../firebase";

const DashboardView = (props) => {
  return (
    <div className="container pt-4">
      <button
        onClick={() => firebase.auth().signOut()}
        className="btn btn-dark"
      >
        Sign Out
      </button>
    </div>
  );
};

export default DashboardView;

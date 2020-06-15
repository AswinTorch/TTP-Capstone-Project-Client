import React from "react";
import firebase from "../../firebase";

const DashboardView = (props) => {
  return (
    <div className="container">
      <h1>Welcome, {firebase.auth().currentUser.displayName}</h1>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
      <img src={firebase.auth().currentUser.photoURL} alt="user" />
    </div>
  );
};

export default DashboardView;

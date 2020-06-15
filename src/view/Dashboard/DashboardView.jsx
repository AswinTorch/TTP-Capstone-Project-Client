import React from "react";
import firebase from "../../firebase";

import SideMenuView from "../SideMenu/SideMenuView";

const DashboardView = (props) => {
  return (
    <div className="container">
      <h1>Welcome, {firebase.auth().currentUser.displayName}</h1>
      <img src={firebase.auth().currentUser.photoURL} width="150px" alt="user" />
      <br/>
      <button onClick={() => firebase.auth().signOut()}>Sign Out</button>

      <SideMenuView />
    </div>
  );
};

export default DashboardView;

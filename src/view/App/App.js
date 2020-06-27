import React, { useState, useEffect } from "react";
import "./App.css";

import firebase from "../../firebase";
import axios from "axios";

import Login from "../Login/Login";
import NavbarView from "../Navbar/NavbarView";
import RoutesContainer from "../Routes/RoutesContainer";
import SideMenu from "../SideMenu/SideMenu";

const App = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    // Shows pop up window for signing in
    signInFlow: "popup",
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  /**
   * Listen for authentication on mount, then send a POST request to register the new user,
   * or connect to an existing one
   */
  useEffect(() => {
    authListener();
  });

  /**
   * Check if user has been authenticated, then set their signed in state to correspond with the
   * authentication
   *
   * Afterwards, send a POST request to the backend to register the new user or connect to an existing one
   */
  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);

      if (user) {
        const uid = user.uid;

        // Let's send a request to check if user exists
        axios
          .get(`/api/students/${uid}`)
          .then((res) => res.data)
          .catch((err) => {
            // User doesn't exist on database, let's make a new one
            const displayName = user.displayName.split(" ");
            const firstName = displayName[0];
            const lastName = displayName[displayName.length - 1];
            const email = user.email;

            let student = { uid, firstName, lastName, email };

            axios
              .post("/api/students/", student)
              .then((res) => res.data)
              .catch((err) => console.error(err));
          });
      }
    });
  };

  /**
   * Display the dashboard only if user is signed in, otherwise
   * display the login page
   */
  return (
    <div className="" style={{ backgroundColor: "#F8F9FC", height: "100vh" }}>
      {isSignedIn ? (
        <>
          <div className="row">
            <SideMenu />
            <div className="container-fluid col-10 pl-0">
              <NavbarView
                displayName={firebase.auth().currentUser.displayName}
                photoURL={firebase.auth().currentUser.photoURL}
              />
              <RoutesContainer />
            </div>
          </div>
        </>
      ) : (
        <>
          <Login uiConfig={uiConfig} />
        </>
      )}
    </div>
  );
};

export default App;

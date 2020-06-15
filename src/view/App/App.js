import React, { Component } from "react";
import "./App.css";
import firebase from "../../firebase";
import LoginView from "../Login/LoginView";
import NavbarView from "../Navbar/NavbarView";
import RoutesContainer from "../Routes/RoutesContainer";

class App extends Component {
  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      // List of OAuth providers supported.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
    });
  }

  render() {
    return (
      <div className="">
        {this.state.isSignedIn ? (
          <>
            <NavbarView
              displayName={firebase.auth().currentUser.displayName}
              photoURL={firebase.auth().currentUser.photoURL}
            />
            <RoutesContainer />
          </>
        ) : (
          <>
            <NavbarView />
            <LoginView uiConfig={this.uiConfig} />
          </>
        )}
      </div>
    );
  }
}

export default App;

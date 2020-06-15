import React, { Component } from "react";
import "./App.css";
import firebase from "../../firebase";
import DashboardContainer from "../Dashboard/DashboardContainer";
import LoginView from "../Login/LoginView";

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
          <DashboardContainer />
        ) : (
          <LoginView uiConfig={this.uiConfig} />
        )}
      </div>
    );
  }
}

export default App;

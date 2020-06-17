import React from "react";
import firebase from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import LoginSplashImage from "./assets/undraw_authentication_fsn5.svg";

const LoginView = (props) => {
  return (
    <div className="container text-center pt-4">
      <h1 className="text-muted">
        Welcome to{" "}
        <span className="h1 text-white">
          <span style={{ textShadow: "1px 1px 2px black" }}>STUDENT</span>
          <span style={{ color: "orange", textShadow: "1px 1px 2px grey" }}>
            First
          </span>
        </span>
        !
      </h1>
      <div className="">
        <img
          src={LoginSplashImage}
          alt="Login Splash"
          style={{ height: 400 }}
        />
      </div>
      <StyledFirebaseAuth
        uiConfig={props.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default LoginView;

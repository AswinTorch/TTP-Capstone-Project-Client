import React from "react";
import firebase from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const LoginView = (props) => {
  return (
    <StyledFirebaseAuth
      uiConfig={props.uiConfig}
      firebaseAuth={firebase.auth()}
    />
  );
};

export default LoginView;

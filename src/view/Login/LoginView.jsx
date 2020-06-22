import React from "react";
import firebase from "../../firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import LoginSplashImage from "./assets/undraw_authentication_fsn5.svg";

const LoginView = (props) => {
  return (
    <div className="container text-center pt-4 d-flex flex-column 100vh">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image">
                  <img
                    src={LoginSplashImage}
                    alt="Login Splash"
                    style={{ height: 400 }}
                  />
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <div className="p-5">
                    <div className="text-center">
                      <span className="h1 text-black mb-4">
                        <span style={{ textShadow: "0.5px 0.5px 0.5px black" }}>
                          STUDENT
                        </span>
                        <span
                          style={{
                            color: "orange",
                            textShadow: "1px 1px 2px grey",
                          }}
                        >
                          First
                        </span>
                      </span>
                      <h1 className="h4 text-gray-900 my-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <StyledFirebaseAuth
                        uiConfig={props.uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted">Copyright 2020</span>
        </div>
      </footer>
    </div>
  );
};

export default LoginView;

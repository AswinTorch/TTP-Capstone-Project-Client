import React, { Component } from "react";
import "./App.css";
import firebase from "../../firebase";
import LoginView from "../Login/LoginView";
import NavbarView from "../Navbar/NavbarView";
import RoutesContainer from "../Routes/RoutesContainer";
import SideMenuContainer from "../SideMenu/SideMenuContainer";

class App extends Component 
{
    state = { isSignedIn: false };

    uiConfig = 
    {
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
     * Listen for authentication on mount
     */
    componentDidMount() 
    {
        this.authListener();
    }

    /**
     * Check if user has been authenticated, then set their signed in state to correspond with the 
     * authentication
     */
    authListener() 
    {
        firebase.auth().onAuthStateChanged((user) => 
        {
            this.setState({ isSignedIn: !!user });
        });
    }

    render() 
    {
        /**
         * Display the dashboard only if user is signed in, otherwise 
         * display the login page
         */
        return (
            <div className="" style={{ backgroundColor: "#F8F9FC" }}>
                {this.state.isSignedIn ? (
                    <>
                        <div className="row">
                            <SideMenuContainer />
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
                        <LoginView uiConfig={this.uiConfig} />
                    </>
                )}
            </div>
        );
    }
}

export default App;

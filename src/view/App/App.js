import React, { Component } from "react";
import "./App.css";

import firebase from "firebase";
import axios from "axios";

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
     * Listen for authentication on mount, then send a POST request to register the new user, 
     * or connect to an existing one
     */
    componentDidMount() 
    {
        this.authListener();
    }

    /**
     * Check if user has been authenticated, then set their signed in state to correspond with the 
     * authentication
     * 
     * Afterwards, send a POST request to the backend to register the new user or connect to an existing one
     */
    authListener() 
    {
        firebase.auth().onAuthStateChanged((user) => 
        {
            this.setState({ isSignedIn: !!user });
            
            if(user)
            {
                const uid = user.uid;
                
                // Let's send a request to check if user exists
                axios.get(`/api/students/${uid}`)
                .then((res) => res.data)
                .catch((err) =>
                {
                    // User doesn't exist on database, let's make a new one
                    const displayName = user.displayName.split(" ");
                    const firstName = displayName[0];
                    const lastName = displayName[displayName.length - 1];
                    const email = user.email;

                    let student = { uid, firstName, lastName, email };

                    axios.post("/api/students/", student)
                    .then((res) => res.data)
                    .catch((err) => console.error(err));
                });
            }
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

import React from "react";
import { Link } from "react-router-dom";

const SideMenuView = (props) => {
  return (
    <div className="container-fluid col-2 bg-dark" style={{ height: "auto" }}>
      <nav className="navbar navbar-dark bg-dark d-flex flex-column align-content-start">
        <div className="navbar-brand mb-0 h1 text-white">
          <i className="fas fa-university mr-1"></i>S
          <span style={{ color: "orange" }}>F</span>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item my-2">
            <Link to="/dashboard" className="nav-link">
              <div className="row">
                <div className="col-2">
                  <i className="fa fa-tachometer"></i>
                </div>
                <div className="col">
                  <span className="d-none d-md-block"> Dashboard</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link to="/enrollment" className="nav-link">
              <div className="row">
                <div className="col-2">
                  <i className="fa fa-graduation-cap "></i>
                </div>
                <div className="col">
                  <span className="d-none d-md-block"> Enrollment</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link to="/finances" className="nav-link">
              <div className="row">
                <div className="col-2">
                  <i className="fa fa-credit-card-alt"></i>
                </div>
                <div className="col">
                  <span className="d-none d-md-block"> Finance</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenuView;

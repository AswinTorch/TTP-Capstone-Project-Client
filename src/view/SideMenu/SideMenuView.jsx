import React from "react";
import { Link } from "react-router-dom";

const SideMenuView = (props) => {
  return (
    <div className="container-fluid col-2 bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 text-white">
          STUDENT<span style={{ color: "orange" }}>First</span>
        </span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/enrollment" className="nav-link">
              Enrollment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/finances" className="nav-link">
              Finances
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenuView;

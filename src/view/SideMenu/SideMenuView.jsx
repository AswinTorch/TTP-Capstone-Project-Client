import React from "react";
import { Link } from "react-router-dom";

const SideMenuView = (props) =>
{
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <nav className="navbar navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/enrollment" className="nav-link">Enrollment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/finances" className="nav-link">Finances</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default SideMenuView;
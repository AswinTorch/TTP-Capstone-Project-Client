import React from "react";

const EnrolledCoursesView = (props) =>
{
    return (
        <div className="card mt-4 shadow border-0">
            <h5 className="card-header text-primary">Your Courses</h5>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex">
                        CISC. 3440: Machine Learning
                        <span className="badge badge-success">3 credits</span>
                    </li>
                    <li className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex">
                        CISC. 3660: Game Programming
                        <span className="badge badge-success">3 credits</span>
                    </li>
                    <li className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex">
                        CISC. 3665: Game Design
                        <span className="badge badge-success">3 credits</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EnrolledCoursesView;
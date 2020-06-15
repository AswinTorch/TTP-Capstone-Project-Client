import React from "react";

const EnrolledCoursesView = (props) =>
{
    return (
        <div className="card mt-4 shadow border-0">
            <h5 className="card-header text-primary">Your Courses</h5>
            <div className="card-body">
                You are not enrolled in any courses at this time.
            </div>
        </div>
    );
}

export default EnrolledCoursesView;
import React from "react";

import EnrolledCoursesView from "./EnrolledCoursesView";

const EnrollmentView = (props) =>
{
    return (
        <div className="container-fluid p-3">
            <div>
                <h1>Enrollment</h1>
            </div>

            <EnrolledCoursesView />
        </div>
    );
}

export default EnrollmentView;
import React from "react";

import EnrolledCoursesView from "./EnrolledCoursesView";

const EnrollmentView = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h1>Enrollment</h1>
      </div>

      <EnrolledCoursesView />
    </div>
  );
};

export default EnrollmentView;

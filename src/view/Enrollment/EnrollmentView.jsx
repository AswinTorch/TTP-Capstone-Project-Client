import React from "react";

import EnrolledCoursesContainer from "./EnrolledCourses/EnrolledCoursesContainer";
import CourseListContainer from "./CourseList/CourseListContainer";

const EnrollmentView = (props) => {
  return (
    <div className="container-fluid pt-3 pl-4 pr-4 pb-4">
      <div>
        <h2 className="text-muted">Enrollment</h2>
      </div>

      <EnrolledCoursesContainer />
      <CourseListContainer />
    </div>
  );
};

export default EnrollmentView;

import React from "react";
import EnrolledCoursesContainer from "./EnrolledCourses/EnrolledCoursesContainer";

import CourseListContainer from "./CourseList/CourseListContainer";

const Enrollment = (props) => {
  return (
    <div className="container-fluid pt-3 px-4 pb-4">
      <div>
        <h2 className="text-muted">Enrollment</h2>
      </div>

      {/* Enrolled Courses List */}
      <EnrolledCoursesContainer />

      {/* Courses List */}
      <CourseListContainer />
    </div>
  );
};

export default Enrollment;

import React from "react";
import EnrolledCourses from "./EnrolledCourses/EnrolledCourses";

import CourseList from "./CourseList/CourseList";

const Enrollment = (props) => {
  return (
    <div className="container-fluid pt-3 px-4 pb-4">
      <div>
        <h2 className="text-muted">Enrollment</h2>
      </div>

      {/* Enrolled Courses List */}
      <EnrolledCourses />

      {/* Courses List */}
      <CourseList />
    </div>
  );
};

export default Enrollment;

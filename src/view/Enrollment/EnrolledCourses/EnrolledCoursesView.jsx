import React from "react";

import "bootstrap/js/src/modal";
import EnrolledCourseItem from "./EnrolledCourseItem";

/**
 * Represents the entire view of the user's Enrolled Courses
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from EnrolledCoursesContainer
 * Passes props (fetched data) down to EnrolledCourseItem to generate
 */
const EnrolledCoursesView = (props) => {
  return (
    <div className="card mt-4 shadow border-0">
      <h5 className="card-header text-primary">Your Courses</h5>
      <div className="card-body">
        <ul className="list-group">
          <div>
            <EnrolledCourseItem />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EnrolledCoursesView;

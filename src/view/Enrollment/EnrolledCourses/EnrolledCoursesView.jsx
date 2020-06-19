import React from "react";
import "bootstrap/js/src/modal";
import EnrolledCourseItem from "./EnrolledCourseItem";
import Spinner from "react-bootstrap/Spinner";

/**
 * Represents the entire view of the user's Enrolled Courses
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from EnrolledCoursesContainer
 * Passes props (fetched data) down to EnrolledCourseItem to generate
 */
const EnrolledCoursesView = (props) => {
  return (
    <div className="card mt-4 shadow rounded border-0">
      <h5 className="card-header text-primary">Enrolled Courses</h5>
      <div className="">
        <ul className="list-group rounded">
          <div>
            {props.student.enrolled_courses ? (
              // Shows fetched data if it exists

              props.student.enrolled_courses.map((course) => (
                <EnrolledCourseItem
                  course={course}
                  key={course.course_name}
                  dropCourse={props.dropCourse}
                />
              ))
            ) : (
              // Spinner shows if data isn't fetched or doesn't exist
              <p className="pl-4 pt-3 pb-2">
                You're not enrolled in any courses.
              </p>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EnrolledCoursesView;

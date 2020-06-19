import React from "react";
import CourseListItem from "./CourseListItem";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";

/**
 * Represents the entire view of the Course List.
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from CourseListContainer
 * Passes props (fetched data) down to CourseListItem to generate
 */
const CourseListView = ({ courses, addCourse, enrolledCourses }) => {
  return (
    <div className="card card-block mt-4 shadow border-0 rounded">
      <h5 className="card-header text-info">Course List</h5>
      <div className="rounded">
        <Accordion className="rounded-0">
          {courses && courses.length !== 0 ? (
            // Shows fetched data if it exists
            courses.map((course, index) => (
              <CourseListItem
                key={course.course_identifier + course.course_number}
                course={course}
                index={index}
                addCourse={addCourse}
                enrolledCourses={enrolledCourses}
              />
            ))
          ) : (
            // Spinner shows if data isn't fetched or doesn't exist
            <div className="text-center">
              <Spinner animation="grow" variant="secondary" className="mr-2" />
              <Spinner animation="grow" variant="secondary" className="mr-2" />
              <Spinner animation="grow" variant="secondary" className="" />
            </div>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseListView;

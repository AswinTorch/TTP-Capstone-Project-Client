import React from "react";
import CourseListItem from "./CourseListItem";
import Accordion from "react-bootstrap/Accordion";

/**
 * Represents the entire view of the Course List.
 * This component controls the type of display to use
 *
 * Receives props (fetched data) from CourseListContainer
 * Passes props (fetched data) down to CourseListItem to generate
 */
const CourseListView = ({ courses }) => {
  return (
    <div className="card card-block mt-4 shadow border-0">
      <h5 className="card-header text-info">Course List</h5>
      <div className="card-body">
        <Accordion>
          {courses &&
            courses.map((course, index) => (
              <CourseListItem key={course.id} course={course} index={index} />
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseListView;

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
const CourseListView = ({ courses }) => {
  return (
    <div className="card card-block mt-4 shadow border-0">
      <h5 className="card-header text-info">Course List</h5>
      <div className="card-body">
        <Accordion>
          {courses.length !== 0 ? (
            // Shows fetched data if it exists
            courses.map((course, index) => (
              <CourseListItem key={course.id} course={course} index={index} />
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

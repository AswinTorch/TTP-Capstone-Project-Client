import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/**
 * Represents a single list item in CourseListView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from CourseListView and renders it
 */
const CourseListItem = ({ course, index }) => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Body} variant="link" eventKey={index}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="">
            {course.course_identifier} {course.course_number}:{" "}
            {course.course_name}
          </span>
          <span
            className="badge badge-success d-flex align-items-center"
            style={{ maxHeight: 20 }}
          >
            {Number(course.units)} credits
          </span>
        </div>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={index}>
        <Card.Body className="border border-bottom-0 border-left-0 border-right-0">
          <p>{course.description}</p>
          <Button variant="outline-success">Enroll</Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default CourseListItem;

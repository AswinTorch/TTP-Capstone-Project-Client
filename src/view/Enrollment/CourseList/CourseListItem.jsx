import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import firebase from "../../../firebase";
import _ from "lodash";

/**
 * Represents a single list item in CourseListView
 * This component controls how and what type of list item is displayed
 *
 * Receives props (fetched data) from CourseListView and renders it
 */
const CourseListItem = ({ course, index, addCourse, enrolledCourses }) => {
  const [isLoading, setLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Runs on initial render of component and when state is updated
  useEffect(() => {
    // Function that calls the redux addCourse with current user id and course to add to enrolled courses
    async function addCourseToEnrolled() {
      try {
        const id = await firebase.auth().currentUser.uid;
        addCourse(id, course);
      } catch (error) {
        console.error(error);
      }
    }

    if (enrolledCourses) {
      // Checks if current course is already in enrolled courses list of student
      for (let enrolledCourse of enrolledCourses) {
        if (_.isEqual(enrolledCourse, course)) {
          setIsEnrolled(true);
          break;
        } else if (!_.isEqual(enrolledCourse, course) && isEnrolled) {
          setIsEnrolled(false);
        }
      }
    }

    // Handles loading "animation" of button || Barely noticable
    if (isLoading) {
      addCourseToEnrolled().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading, addCourse, course, enrolledCourses, isEnrolled]);
  const handleClick = () => setLoading(true);

  return (
    <Card>
      <Accordion.Toggle
        as={Card.Body}
        variant="link"
        eventKey={index}
        className="btn btn-light rounded-0"
      >
        <div className="d-flex justify-content-between align-items-center rounded-0">
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
        <Card.Header className="border border-bottom-0 border-left-0 border-right-0">
          <p>{course.description}</p>
          {course.lecturer ? (
            <p>
              Available Professors:{" "}
              {course.lecturer.map((prof) => (
                <span className="badge badge-secondary mr-2" key={prof}>
                  {prof}{" "}
                </span>
              ))}
            </p>
          ) : (
            <p>
              Available Professors:{" "}
              <span className="badge badge-secondary mr-2">Staff</span>
            </p>
          )}
          <div className="form-inline mb-2">
            <Button
              variant={
                isLoading || isEnrolled ? "outline-danger" : "outline-success"
              }
              disabled={isLoading || isEnrolled}
              onClick={!isLoading && !isEnrolled ? handleClick : null}
              className="mr-2"
            >
              {isLoading ? "Enrolling..." : isEnrolled ? "Enrolled" : "Enroll"}
            </Button>
            <Button variant="outline-info" onClick={null}>
              Swap
            </Button>
          </div>
        </Card.Header>
      </Accordion.Collapse>
    </Card>
  );
};

export default CourseListItem;

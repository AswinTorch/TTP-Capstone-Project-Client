import React, { Component } from "react";
import { connect } from "react-redux";

import EnrollmentView from "./EnrollmentView";
import fetchRegisteredCoursesThunk from "../../state/enrollment/thunks";

// Smart container for enrollment
class EnrollmentContainer extends Component
{
    render()
    {
        return (
            <EnrollmentView />
        );
    }
}

// Map state to props
const mapState = (state) =>
{
    return {

    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchRegisteredCourses: (studentId) => dispatch(fetchRegisteredCoursesThunk(studentId))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(EnrollmentContainer);
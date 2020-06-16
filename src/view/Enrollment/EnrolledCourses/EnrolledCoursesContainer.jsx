import React, { Component } from "react";
import { connect } from "react-redux";

import EnrolledCoursesView from "./EnrolledCoursesView";


/**
 * Smart container for enrolled courses component
 * 
 * Fetches data and passes down props to:
 * - EnrolledCoursesView
 */
class EnrolledCoursesContainer extends Component
{
    render()
    {
        return <EnrolledCoursesView />
    }
}

// Map state to props
const mapState = (state) =>
{
    return {};
};

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {};
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(EnrolledCoursesContainer);
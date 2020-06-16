import React, { Component } from "react";
import { connect } from "react-redux";

import CourseListView from "./CourseListView";

/**
 * Smart container for course list component
 * 
 * Fetches data and passes down props to:
 * - CourseListView
 */
class CourseListContainer extends Component
{
    render()
    {
        return <CourseListView />
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
export default connect(mapState, mapDispatch)(CourseListContainer);
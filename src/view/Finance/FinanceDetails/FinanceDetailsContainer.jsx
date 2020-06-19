import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";

import FinanceDetailsView from "./FinanceDetailsView";

/**
 * Smart container for financial details component
 * 
 * Fetches user data and displays details on cost of courses
 * Passes props down to:
 * - FinanceDetailsView
 */
class FinanceDetailsContainer extends Component
{
    async componentDidMount()
    {
        const id = firebase.auth().currentUser.uid;
        await this.props.fetchStudent(id);
    }

    render()
    {
        return (
            <FinanceDetailsView 
                student={this.props.student}
            />
        );
    }
}

// Map state to props
const mapState = (state) =>
{
    return {
        student: state.enrollment.student
    };
}

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    };
}

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(FinanceDetailsContainer);
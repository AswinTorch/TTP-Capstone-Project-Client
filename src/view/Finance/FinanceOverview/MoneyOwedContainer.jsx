import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";

import MoneyOwedView from "./MoneyOwedView";

/**
 * Smart container for money owed component
 * 
 * Fetches user data and calculates cost of classes based on credit
 * Passes props down to:
 * - MoneyOwedView
 */
class MoneyOwedContainer extends Component
{
    async componentDidMount()
    {
        const id = firebase.auth().currentUser.uid;
        await this.props.fetchStudent(id);
    }

    calculateMoneyOwed(student)
    {
        let totalCredit = 0;

        if(student.enrolled_courses === undefined) return "N/A";
        else
        {
            let courses = student.enrolled_courses;
            courses.forEach((course) =>
            {
                totalCredit += parseInt(course.units);
            });
            return totalCredit * 150;
        }
    }

    render()
    {
        return (
            <MoneyOwedView 
                moneyOwed={this.calculateMoneyOwed(this.props.student)}
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
};

// Map dispatch to props
const mapDispatch = (dispatch) =>
{
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    };
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(MoneyOwedContainer);
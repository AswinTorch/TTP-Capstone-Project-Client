import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchStudentThunk } from "../../../state/enrollment/thunks";
import firebase from "../../../firebase";

/**
 * Smart container for financial details component
 * 
 * Fetches user data and displays details on cost of courses
 * Passes props down to:
 * - FinanceDetailsView
 */
class FinanceDetailsContainer extends Component
{

}
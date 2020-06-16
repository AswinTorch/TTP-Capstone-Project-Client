import React, { Component } from "react";
import { connect } from "react-redux";

import EnrollmentView from "./EnrollmentView";

// Smart container for enrollment
class EnrollmentContainer extends Component {
  render() {
    return <EnrollmentView />;
  }
}

// Map state to props
const mapState = (state) => {
  return {};
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {};
};

// Export our store-connected container by default
export default connect(mapState, mapDispatch)(EnrollmentContainer);

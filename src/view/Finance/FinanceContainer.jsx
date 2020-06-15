import React, { Component } from "react";
import { connect } from "react-redux";

import FinanceView from "./FinanceView";

// Smart container for finance
class FinanceContainer extends Component
{
    render()
    {
        return <FinanceView />;
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
export default connect(mapState, mapDispatch)(FinanceContainer);
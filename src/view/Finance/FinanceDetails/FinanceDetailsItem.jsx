import React, { useState } from "react";
import firebase from "../../../firebase";

/**
 * Represents a single list item in FinanceDetailsView
 * This component controls how and what type of list item is displayed
 * 
 * Receives props (fetched data) from FinanceDetailsView and renders it
 */
const FinanceDetailsItem = ({ transaction }) =>
{
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <li
                className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex rounded py-4 border-bottom-0"
                onClick={handleShow}
            >
                Placeholder
            </li>
        </div>
    );
}

export default FinanceDetailsItem;
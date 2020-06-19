import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import firebase from "../../firebase";

/**
 * Represents the user toggle menu view
 * This component controls the type of display to use
 *
 * Receives props from NavbarView
 */

const UserToggleMenu = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={props.toggleType} id="dropdown-custom-components">
        <img
          src={props.photoURL}
          alt=""
          className="rounded-circle mr-2"
          style={{ height: 40, width: 40 }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu as={props.menuType} className="shadow border-0">
        <Dropdown.Item eventKey="1" className="text-muted">
          <i className="fas fa-user mr-3"></i>
          <span className="">Profile</span>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey="2"
          className="text-muted"
          onClick={() => firebase.auth().signOut()}
        >
          <i className="fas fa-sign-out-alt mr-3"></i>
          <span className="">Logout</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserToggleMenu;

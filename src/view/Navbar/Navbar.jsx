import React, { useState } from "react";
import NotificationsToggleMenu from "./NotificationsToggleMenu";
import UserToggleMenu from "./UserToggleMenu";

/**
 * Represents the entire navbar view
 * This component controls the type of display to use
 *
 * Receives props from App.js
 * Passes props (user info, etc) down to NotificationsToggleMenu and UserToggleMenu
 */
const Navbar = (props) => {
  // Lines 15-65 are boilterplate necessary code to setup responsive react-bootstrap components
  const [value] = useState("");
  const NotificationsToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/#"
      className="text-danger"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const UserToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/#"
      className="text-muted"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <nav className="navbar navbar-light bg-light shadow">
      <div className="div"></div>

      <div className="form-inline">
        {/* Notifications Toggle View */}
        <NotificationsToggleMenu
          toggleType={NotificationsToggle}
          menuType={CustomMenu}
        />
        <span className="text-muted mr-3 ml-4">{props.displayName}</span>

        {/* User Toggle View */}
        <UserToggleMenu
          toggleType={UserToggle}
          menuType={CustomMenu}
          photoURL={props.photoURL}
        />
      </div>
    </nav>
  );
};

NavbarView.defaultProps = {
  displayName: null,
  photoURL: null,
};

export default Navbar;

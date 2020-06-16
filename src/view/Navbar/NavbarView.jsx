import React from "react";

const NavbarView = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="div"></div>
      <div className="form-inline">
        <span className="mr-3">{props.displayName}</span>
        <img
          src={props.photoURL}
          alt=""
          className="rounded-circle"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </nav>
  );
};

NavbarView.defaultProps = {
  displayName: null,
  photoURL: null,
};

export default NavbarView;

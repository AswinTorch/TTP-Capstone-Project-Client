import React from "react";

const NavbarView = (props) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <span className="navbar-brand mb-0 h1 text-white">
        STUDENT<span style={{ color: "orange" }}>First</span>
      </span>
      <div className="form-inline text-white">
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

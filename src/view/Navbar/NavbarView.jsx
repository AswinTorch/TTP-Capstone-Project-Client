import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import firebase from "../../firebase";

const NavbarView = (props) => {
  const [value, setValue] = useState("");
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

  const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
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
        <Dropdown>
          <Dropdown.Toggle
            as={NotificationsToggle}
            id="dropdown-custom-components"
          >
            <i class="fas fa-bell"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Header>
              <strong>Announcements</strong>
            </Dropdown.Header>
            <Dropdown.Item eventKey="1">
              <a class="dropdown-item d-flex align-items-center" href="/#">
                <div class="mr-3">
                  <div
                    class=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                  >
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-muted">Today</div>
                  <span class="font-weight-bold">
                    Registration for graduation coming up!
                  </span>
                </div>
              </a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">
              <a class="dropdown-item d-flex align-items-center" href="/#">
                <div class="mr-3">
                  <div
                    class=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                  >
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-muted">Today</div>
                  <span class="font-weight-bold">
                    Tuition is due immediately.
                  </span>
                </div>
              </a>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">
              <a class="dropdown-item d-flex align-items-center" href="/#">
                <div class="mr-3">
                  <div
                    class=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40 }}
                  >
                    <i class="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div class="small text-muted">Yesterday</div>
                  <span class="font-weight-bold">
                    Breaking news: college is a scam.
                  </span>
                </div>
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span className="mr-3 ml-4">{props.displayName}</span>
        <Dropdown>
          <Dropdown.Toggle as={ProfileToggle} id="dropdown-custom-components">
            <img
              src={props.photoURL}
              alt=""
              className="rounded-circle mr-2"
              style={{ height: 40, width: 40 }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item
              eventKey="1"
              className="text-muted"
              onClick={() => firebase.auth().signOut()}
            >
              <i class="fas fa-sign-out-alt mr-3"></i>
              <span class="font-weight-bold">Logout</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
};

NavbarView.defaultProps = {
  displayName: null,
  photoURL: null,
};

export default NavbarView;

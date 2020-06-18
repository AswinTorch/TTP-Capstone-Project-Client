import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Represents the notifications toggle menu view
 * This component controls the type of display to use
 *
 * Receives props from NavbarView
 */

const NotificationsToggleMenu = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={props.toggleType} id="dropdown-custom-components">
        <i className="fas fa-bell"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu as={props.menuType} className="shadow border-0">
        <Dropdown.Header>
          <strong>Announcements</strong>
        </Dropdown.Header>
        <Dropdown.Item eventKey="1">
          <a className="dropdown-item d-flex align-items-center" href="/#">
            <div className="mr-3">
              <div
                className=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
              >
                <i className="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-muted">Today</div>
              <span className="font-weight-bold">
                Registration for graduation coming up!
              </span>
            </div>
          </a>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">
          <a className="dropdown-item d-flex align-items-center" href="/#">
            <div className="mr-3">
              <div
                clasName=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
              >
                <i className="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-muted">Today</div>
              <span className="font-weight-bold">
                Tuition is due immediately.
              </span>
            </div>
          </a>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">
          <a className="dropdown-item d-flex align-items-center" href="/#">
            <div className="mr-3">
              <div
                className=" bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 40, height: 40 }}
              >
                <i className="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div className="small text-muted">Yesterday</div>
              <span className="font-weight-bold">
                Breaking news: college is a scam.
              </span>
            </div>
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationsToggleMenu;

import React from "react";

import "bootstrap/js/src/modal";

/**
 * Represents the entire view of the user's Enrolled Courses
 * This component controls the type of display to use
 * 
 * Receives props (fetched data) from EnrolledCoursesContainer
 * Passes props (fetched data) down to EnrolledCourseItem to generate
 */
const EnrolledCoursesView = (props) => {
  return (
    <div className="card mt-4 shadow border-0">
      <h5 className="card-header text-primary">Your Courses</h5>
      <div className="card-body">
        <ul className="list-group">
          <div>
            <li
              className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex rounded-top"
              data-toggle="modal"
              data-target="#cisc3440-modal"
            >
              CISC. 3440: Machine Learning
              <span className="badge badge-success">3 credits</span>
            </li>

            <div
              className="modal fade"
              id="cisc3440-modal"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      CISC. 3440: Machine Learning <br />
                      <span className="badge badge-success">3 credits</span>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body" role="document">
                    An introduction to machine learning for students with some
                    mathematical maturity. Topics include: machine learning in
                    relation to artificial intelligence, data sources and
                    characteristics, linear and non-linear regression, machine
                    learning concepts like the bias-variance tradeoff, linear
                    and non-linear classification, hidden Markov models and the
                    expectation-maximization algorithm, unsupervised learning,
                    and deep learning. Examples will be drawn from several
                    domains including natural language processing.
                    <br />
                    <br />
                    Prerequisite: CISC 3130 or 3225; MATH 2501 or 3501 or CISC
                    2210.
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-info">Swap</button>
                    <button className="btn btn-danger">Drop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <li
              className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex rounded-top"
              data-toggle="modal"
              data-target="#cisc3660-modal"
            >
              CISC. 3660: Game Programming
              <span className="badge badge-success">3 credits</span>
            </li>

            <div
              className="modal fade"
              id="cisc3660-modal"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      CISC. 3660: Game Programming <br />
                      <span className="badge badge-success">3 credits</span>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body" role="document">
                    Game programming techniques. 2D and 3D games. Data
                    representations of virtual elements. Visualizing the 3D game
                    environment. Controlling motion and behaviors. Interaction
                    control. Game architectures, including multi-player games
                    and message passing. Managing complexity. Teamwork to create
                    a 3D game using a 3D multi-player game engine. Interaction
                    with game development professionals regarding
                    state-of-the-art hardware and software technology for game
                    creation and adaptation. (Not open to students who have
                    taken Computer and Information Science 3667.)
                    <br />
                    <br />
                    Prerequisite: Computer and Information Science 3130 [22].
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-info">Swap</button>
                    <button className="btn btn-danger">Drop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <li
              className="list-group-item list-group-item-action btn btn-outline-warning justify-content-between align-items-center d-flex rounded-top"
              data-toggle="modal"
              data-target="#cisc3665-modal"
            >
              CISC. 3665: Game Design
              <span className="badge badge-success">3 credits</span>
            </li>

            <div
              className="modal fade"
              id="cisc3665-modal"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      CISC. 3665: Game Design <br />
                      <span className="badge badge-success">3 credits</span>
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body" role="document">
                    Introduction to designing the intelligence behind computer
                    games. Fundamentals of designing, programming and
                    troubleshooting game behavior. Documenting and critiquing
                    design. Multi-week small-group projects in game design. (Not
                    open to students who have taken Computer and Information
                    Science 3667.)
                    <br />
                    <br />
                    Prerequisite: Computer and Information Science 3130, and
                    Mathematics 1011 or 1201.
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-info">Swap</button>
                    <button className="btn btn-danger">Drop</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default EnrolledCoursesView;

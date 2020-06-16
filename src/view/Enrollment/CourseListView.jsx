import React from "react";

import "bootstrap/js/src/collapse";

const CourseListView = (props) =>
{
    return (
        <div className="card card-block mt-4 shadow border-0">
            <h5 className="card-header text-info">Course List</h5>
            <div className="card-body">
                <ul className="list-group list-group-toggle" id="accordion">
                    <div>
                        <li className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex"
                            data-toggle="collapse"
                            data-target="#acct2001-collapse"
                            aria-controls="acct2001-collapse"
                        >
                            ACCT. 2001: Introductory Accounting
                            <span className="badge badge-success">4 credits</span>
                        </li>
                        
                        <div id="acct2001-collapse" className="collapse" data-parent="#accordion">
                            <div className="card-header">
                                Introduction to the concepts and principles of accounting. Techniques of data accumulation. Nature and interpretation of financial statements. Corporate accounting. (Not open to students who have completed Economics 71.01 or 71.1.) Fall and spring terms.
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <li className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex"
                            data-toggle="collapse"
                            data-target="#acct2002-collapse"
                            aria-controls="acct2002-collapse"
                            role="button"
                        >
                            ACCT. 2002: Survey of Accounting
                            <span className="badge badge-success">4 credits</span>
                        </li>

                        <div id="acct2002-collapse" className="collapse" data-parent="#accordion">
                            <div className="card-header">
                                Introduction to financial and managerial accounting for students not intending to be accounting or finance majors. Accounting and finance majors must take ACCT 2001. Financial topics include a user’s perspective of collecting and organizing information, accounting for accruals and deferrals, accounting for key balance sheet and income statement accounts, and understanding internal controls and basic financial statement analysis tools. Managerial accounting topics include cost behavior, leverage, cost accumulation, budgeting, and performance analysis.
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <li className="list-group-item list-group-item-action btn justify-content-between align-items-center d-flex"
                            data-toggle="collapse"
                            data-target="#busn4101w-collapse"
                            aria-controls="busn4101w-collapse"
                        >
                            BUSN. 4101W: Seminar in Strategic Marketing Management
                            <span className="badge badge-success">3 credits</span>
                        </li>

                        <div id="busn4101w-collapse" className="collapse" data-parent="#accordion">
                            <div className="card-header">
                                Equips students with marketing decision making skills through case study analysis and demonstrates how to develop a strategic marketing plan.  Emphasis on the integration of marketing research, market segmentation, targeting, and positioning; and product, pricing, distribution, and promotion strategies.  Importance of marketing ethics and corporate social responsibility in decision making. This course is writing-intensive. Prerequisite: English 1012.Prerequisite or corequisite: Business 3100 and senior standing
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default CourseListView;
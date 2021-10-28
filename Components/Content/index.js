import React from "react";
import Filter from "../Filter";
import Table from "../Table";
import ContentHeader from "./contentHeader";
import { connect } from "react-redux";

function Content(props) {
  const { menu } = props;

  return (
    <>
      {menu === "Reporting" ? (
        <div className="content">
          <ContentHeader />
          <Filter />
          <Table />
        </div>
      ) : (
        <div className="content">
          <div className="email-header"> Email Subscriptions</div>
          <div className="line-5"></div>
          <div className="save-btn">
            <div className="inner-btn">Save</div>
          </div>
          <input
            className="input-search"
            placeholder="Search a common"
            type="text"
          />

          <div className="email-table">
            <div className="email-table-header">
              <div className="email-com">
                <div>Company</div>
              </div>
              <div className="email-date">
                <div>Date Modified</div>
              </div>
              <div className="email-actions">
                <div> Actions </div>
              </div>
            </div>

            <div className="email-table-column">
              <div className="email-com">
                <div className="company-name">Company</div>
              </div>
              <div className="email-date">
                <div>Date Modified</div>
              </div>
              <div className="email-actions">
                <div className="action">
                  <div className="action-plus">
                    <img className="action-plus-icon" src="./plus.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="email-table-column-alternate">
              <div className="email-com">
                <div className="company-name">company</div>
              </div>
              <div className="email-date">
                <div className="date-modified">Date Modified</div>
              </div>
              <div className="email-actions">
                <div className="action">
                  <div className="action-plus">
                    <img className="action-plus-icon" src="./plus.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="email-table-column">
              <div className="email-com">
                <div className="company-name">Company</div>
              </div>
              <div className="email-date">
                <div className="date-modified">Date Modified</div>
              </div>
              <div className="email-actions">
                <div className="action">
                  <div className="action-plus">
                    <img className="action-plus-icon" src="./plus.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="prev">
              <div className="prev-box"> Previous</div>
            </div>

            <div className="next">
              <div className="next-box"> Next</div>
              <div className="add-email">Add Email</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return { menu: state.main.menu };
};

export default connect(mapStateToProps, null)(Content);

import React from "react";
import Reporting from "./reporting";
import Progress from "./progress";
import { connect } from "react-redux";

function Sidebar(props) {
  const { menu, selectedMenu } = props;
  return (
    <div className="sidebar">
      {menu === "Reporting" ? (
        <div className="sidebar-slider sidebar-progress"></div>
      ) : (
        ""
      )}

      {menu === "Project" ? (
        <Progress />
      ) : menu === "Reporting" ? (
        <Reporting />
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { menu: state.main.menu };
};

export default connect(mapStateToProps, null)(Sidebar);

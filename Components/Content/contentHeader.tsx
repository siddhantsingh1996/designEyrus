import React from "react";

export default function ContentHeader() {
  return (
    <div className="content-header">
      <div className="item-wrapper">
        <div className="header-slider"> </div>
        <div className="wrapper-text-box">
          <div className="day-text">Today</div>
        </div>
        <div className="view-box">
          <div className="view-bar">
            <div className="plus-view">
              <img src="./plusview.svg" alt="" />
            </div>
            <div className="view-text">NEW VIEW</div>
          </div>
        </div>
      </div>

      <div className="export-btn">
        <div className="export-box">
          Export
          <div className="upload-img-box">
            <img className="upload-img" src="/upload.svg.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

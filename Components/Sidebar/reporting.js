import React from "react";

export default function Reporting() {
  return (
    <>
      <div className="title">
        <p className="report-text">Reporting</p>
        <div className="title-box">
          <img className="title-icon" src="./menufold.svg" alt="" />
        </div>
      </div>
      <div className="line-1"></div>
      <div className="frame-one">
        <div className="sidebar-components">
          <div className="img-box">
            <img
              className="img-icon-progress"
              src="./graph.svg"
              alt=""
            />
          </div>
          <div className="sidebar-labels">Progress</div>
        </div>

        <div className="sidebar-components">
          <div className="img-box">
            <img className="img-icon-safety" src="./lock.svg" alt="" />
          </div>
          <div className="sidebar-labels">Safety</div>
        </div>

        <div className="sidebar-components">
          <div className="img-box">
            <img className="img-icon-workforce" src="./people.svg" alt="" />
          </div>
          <div className="sidebar-labels">Workforce</div>
        </div>

        <div className="sidebar-components">
          <div className="img-box">
            <img className="img-icon-hardware" src="./link.svg" alt="" />
          </div>
          <div className="sidebar-labels">Hardware</div>
        </div>

        <div className="sidebar-components">
          <div className="img-box">
            <img className="img-icon-access" src="./lock.svg" alt="" />
          </div>
          <div className="sidebar-labels">Access</div>
        </div>
      </div>
      {/*<div className="sidebar-components">
        <img className="img-icon" src="./grow.png" alt=""/>
        <p>Progress</p>
      </div>
      <div className="sidebar-components">
      <img className="img-icon" src="./shield.png" alt=""/>
        <p>Safety</p>
        </div>
      <div className="sidebar-components">
      <img className="img-icon" src="./overwork.png" alt=""/>
       <p> Workforce</p>
       
        </div>
      <div  className="sidebar-components">
      <img className="img-icon" src="./hardware.png" alt=""/>
        <p>Hardware</p>
       
        </div>
      <div className="sidebar-components">
      <img  className="img-icon"src="./key.png" alt=""/>
       <p> Access</p>
      
    </div>*/}

      <div className="add-category">Add Category</div>
    </>
  );
}

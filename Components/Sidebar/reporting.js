import React from 'react'

export default function Reporting() {
    return (
       <>
         <div className="title">       
           <p className="report-text">Reporting</p>
           <div className="title-box">
           <img className="title-icon" src="./MenuFold.png" alt=""/>
           </div>
           </div>
      <div className="line-1"></div>
       <div className="frame-one">
      
       <div className="sidebar-components">
        <div className="img-box">
         <img className="img-icon-progress" src="./selectedGraph.png" alt=""/>
        </div>
        <div className="sidebar-labels">Progress</div>
      </div>

      <div className="sidebar-components">
        <div className="img-box">
         <img className="img-icon-safety" src="./safety.png" alt=""/>
        </div>
        <div className="sidebar-labels">Safety</div>
      </div>

      <div className="sidebar-components">
        <div className="img-box">
         <img className="img-icon-workforce" src="./people.png" alt=""/>
        </div>
        <div className="sidebar-labels">Workforce</div>
      </div>

      <div className="sidebar-components">
        <div className="img-box">
         <img className="img-icon-hardware" src="./hardware.png" alt=""/>
        </div>
        <div className="sidebar-labels">Hardware</div>
      </div>

      <div className="sidebar-components">
        <div className="img-box">
         <img className="img-icon-access" src="./lock.png" alt=""/>
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
        
    )
}

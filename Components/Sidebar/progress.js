import React from 'react'

export default function Progress(props) {
 
    return (
       <>
          <div className="title">       
           <div className="progress-text">Project Setting</div>
           <div className="title-progress">
             <div className="img-wrapper"> 
           <img className="title-icon-progress" src="./MenuFold.png" alt=""/>
            </div>
           </div>
           </div>
           <div className="line-1"></div>
           <div className="frame-progress">
           <div className="sidebar-components-progress">
             <div className="img-wrapper">
        <img className="img-icon-people" src="./people.svg" alt=""/>
        </div>
        <div className="sidebar-progress-name">User Management</div>
      </div>
      <div className="sidebar-other-components">
        <div className="img-wrapper">
      <img className="img-icon-puzzle" src="./puzzle.svg" alt=""/>
      </div>
        <div className="sidebar-progress-name">Companies</div>
        </div>
      <div className="sidebar-other-components">
        <div className="img-wrapper">
      <img className="img-icon-save" src="./save.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name"> Reporting</div>
       
        </div>
      <div  className="sidebar-other-components">
        <div className="img-wrapper">
      <img className="img-icon-onsite" src="./hardware.svg" alt=""/>
      </div>
        <div className="sidebar-progress-name">on-site registrations</div>
       
        </div>
      <div className="sidebar-other-components">
        <div className="img-wrapper">
      <img  className="img-icon-zone"src="./Zones.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Hardware</div>
        </div>

        <div className="sidebar-other-components">
          <div className="img-wrapper">
      <img  className="img-icon-zone"src="./Zones.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Location</div>
        </div>
        <div className="sidebar-other-components">
          <div className="img-wrapper">
      <img  className="img-icon-hardware"src="./hardware.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Integrations</div>
        </div>
        <div className="sidebar-other-components">
          <div className="img-wrapper">
      <img  className="img-icon-warning"src="./warning.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Alerts</div>
        </div>
        <div className="sidebar-other-components progress-clicked">
          <div className="img-wrapper" style={{marginTop:"4px"}}>
      <img  className="img-icon-email" src="./email.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name " style={{marginTop:"6px",marginLeft:"6px"}}>Email Subscriptions</div>
        </div>
        <div className="sidebar-other-components">
          <div className="img-wrapper">
      <img  className="img-icon-zone"src="./Zones.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Zones</div>
        </div>
        
        <div className="sidebar-other-components">
          <div className="img-wrapper">
      <img  className="img-icon-zone"src="./Zones.svg" alt=""/>
      </div>
       <div className="sidebar-progress-name">Field Reporting</div>
        </div>
        
        </div>
       </>
    )
}





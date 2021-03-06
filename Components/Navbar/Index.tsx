import React, { useState } from "react";

import { connect } from "react-redux";
import { IMenuState } from "../../Typings/menuState";
import { selectedMenu, clickedMenu } from "../../Redux/Actions/main";
function Navbar(props) {
  const [onmenu, setOnMenu] = useState<IMenuState>({ menuClicked: false });
  const { menu, selectedMenu, clickedMenu, menuClicked } = props;
  console.log("onmenu", onmenu);
  return (
    <div className="nav-container">
      <div className="notification-info">
        <span className="info-number">2</span>
      </div>
      <div className="nav-part-one">
        <div className="logo">
          <img src="./logoone.png" alt="" />
        </div>
        <div className="work-selector">
          <div className="work-text">Washington,DC</div>
          <div className="dropdown-wrapper">
            <img className="dropdown" src="./drop.svg" alt="" />
          </div>
        </div>
        <div
          className={onmenu.menuClicked ? "menu menu-clicked" : "menu"}
          onClick={() => {
            if (!onmenu.menuClicked) setOnMenu({ menuClicked: true });
            else {
              setOnMenu({ menuClicked: false });
            }
          }}
        >
          <img
            className={onmenu.menuClicked ? "menu-img-clicked" : "menu-img"}
            src="/menubtn.svg"
            alt=""
          />
          <div
            className={onmenu.menuClicked ? "menu-text-clicked" : "menu-text"}
          >
            Menu
          </div>
        </div>
        {onmenu.menuClicked ? (
          <div className="dropdown-content">
            <div className="content-box">
              <div className="content-lables">
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one"> Overview</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one"> Field Reporting</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div
                className="content-lables"
                style={{ marginTop: "12px" }}
                onClick={() => {
                  selectedMenu("Reporting");
                }}
              >
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one"> Reporting</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one"> Zones</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one">Forecast</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one">People</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one">Companies</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="content-lables" style={{ marginTop: "12px" }}>
                <div className="box-img">
                  <img className="img-house" src="./house.svg" alt="" />
                </div>
                <div className="box-text">
                  <div className="box-text-one">Hardware</div>
                  <div className="box-text-two">
                    Track progress with dashboards
                  </div>
                </div>
              </div>

              <div className="line-3"></div>
              <div
                className="project-setting"
                onClick={() => {
                  selectedMenu("Project");
                }}
              >
                <img
                  className="project-setting-icon"
                  src="./setting.svg"
                  alt=""
                />
                <div className="project">Project Settings</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="nav-part-two">
        <div className="notify-icon">
          <img src="./bell.svg" />
        </div>
        <div className="select-profile">
          <img
            className="img-profile"
            src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
            alt=""
          />
          <img className="drop-down" src="./profile-drop.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { menu: state.main.menu };
};

const mapDispatchToProps = {
  selectedMenu,
  clickedMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

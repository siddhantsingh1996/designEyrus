import React from "react";

export default function Table() {
  return (
    <div className="table-container">
      <div className="header-row">
        <div className="Blank-space"></div>
        <div className="head-first-item">
          <div className="first-row">CSI DIV</div>
        </div>
        <div className="head-second-item">
          <div className="second-row">Company</div>
        </div>
        <div className="head-third-item">
          <div className="third-row">People on-site today</div>
        </div>
      </div>
      <div className="row-data">
        <div className="row-add">
          <div className="outlined-square">
            <div className="outline-border">
              <img className="add-icon" src="./plus.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="row-item-one">
          <div className="data-one">DIV 26</div>
        </div>
        <div className="row-item-two">
          <div className="data-two">Ella's Electric</div>
        </div>
        <div className="row-item-three">
          <div className="data-three">
            <div className="data-three"> 61</div>
          </div>
        </div>
      </div>

      <div className="row-data">
        <div className="row-add">
          <div className="outlined-square">
            <div className="outline-border">
              <img
                style={{
                  height: "9px",
                  width: "9px",
                  position: "absolute",
                  left: "2%",
                  top: "17%",
                }}
                src="./plus.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row-item-one">
          <div className="data-one">DIV 26</div>
        </div>
        <div className="row-item-two">
          <div className="data-two">Ella's Electric</div>
        </div>
        <div className="row-item-three">
          <div className="data-three">
            <div className="data-three"> 61</div>
          </div>
        </div>
      </div>

      <div className="row-data">
        <div className="row-add">
          <div className="outlined-square">
            <div className="outline-border">
              <img
                style={{
                  height: "9px",
                  width: "9px",
                  position: "absolute",
                  left: "2%",
                  top: "24%",
                }}
                src="./plus.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row-item-one">
          <div className="data-one">DIV 26</div>
        </div>
        <div className="row-item-two">
          <div className="data-two">Ella's Electric</div>
        </div>
        <div className="row-item-three">
          <div className="data-three">
            <div className="data-three"> 61</div>
          </div>
        </div>
      </div>
    </div>
  );
}

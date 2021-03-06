import React from "react";
import { DatePicker } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

export default function Filter() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <div className="filter-container">
      <DatePicker className="date-pick" />

      <div className="filter">
        <div className="filter-text">Filter</div>
        <div className="filter-img-box">
          <img className="filter-icon" src="./filter.svg" alt="filter" />
        </div>
      </div>

      <Search
        placeholder="Search"
        onSearch={onSearch}
        style={{
          width: "356px",
          height: "20px",
          margin: "32px 0px 16px 28px",
          background: "FFFFFF",
          border: "1px solid #D9D9D9",
          boxSizing: "border-box",
          borderRadius: "4px 0px 0px 4px",
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "22px",
        }}
      />
      <div className="upd-time"> Updated at 19:34 EST</div>
      <div className="tbl-setting">
        <div className="setting-text">Table Setting</div>
        <div className="setting-box-icon">
          <img className="setting-icon" src="./time.svg.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

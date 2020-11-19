import React from "react";
import Greetings from "../overview/Greetings";
import OverviewData from "../overview/OverviewData";
import RoundedRectangle from "../components/RoundedRectangle";

function Overview(props) {
  const floatRightStyle = {
    float: "right",
  };
  return (
    <div className="Overview">
      <h2>Overview</h2>
      <RoundedRectangle style={floatRightStyle}>
        <i className="far fa-bell"></i>
      </RoundedRectangle>
      <RoundedRectangle style={floatRightStyle}>
        <i className="fas fa-search"></i>
      </RoundedRectangle>
      <Greetings name={"Abhishek"} />
      <OverviewData />
    </div>
  );
}

export default Overview;

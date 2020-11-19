import React from "react";
import RoundedReactangle from "../components/RoundedRectangle";
import Activity from "./Activity";
import Balance from "./Balance";

function OverviewSectionOne(props) {
  return (
    <div className="OverviewSectionOne">
      <RoundedReactangle>
        <Balance balance={"1,00,000"} accountNumber={"xxxxxxxxx1234"} />
      </RoundedReactangle>
      <Activity />
    </div>
  );
}

export default OverviewSectionOne;

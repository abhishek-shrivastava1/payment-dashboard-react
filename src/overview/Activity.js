import React, { useState } from "react";
// import RoundedRectangle from "../components/RoundedRectangle";
import TransactionList from "./TransactionList";

function Activity(props) {
  const [activityType, setActivityType] = useState("RECENT TRANSACTIONS");
  const selectedHeading = {
    backgroundColor: "purple",
    boxShadow: "5px 5px 40px purple",
    borderRadius: "30px",
    padding: "3%",
    color: "whitesmoke",
    fontSize: "0.8rem",
  };
  function handleClick(event) {
    if (event.target.innerText === "RECENT TRANSACTIONS")
      setActivityType("RECENT TRANSACTIONS");
    else if (event.target.innerText === "SPEND ANALYSIS")
      setActivityType("SPEND ANALYSIS");
    else setActivityType("RECENT TRANSACTIONS");
  }
  return (
    <div className="Activity">
      <div
        style={activityType === "RECENT TRANSACTIONS" ? selectedHeading : {}}
        className="heading"
        onClick={handleClick}
      >
        <i className="fas fa-exchange-alt"></i>
        <p>RECENT TRANSACTIONS</p>
      </div>
      <div
        className="heading"
        style={activityType === "SPEND ANALYSIS" ? selectedHeading : {}}
        onClick={handleClick}
      >
        <i className="fas fa-chart-pie"></i>
        <p>SPEND ANALYSIS</p>
      </div>
      {activityType === "RECENT TRANSACTIONS" && <TransactionList />}
    </div>
  );
}

export default Activity;

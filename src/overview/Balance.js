import React from "react";

function Balance(props) {
  return (
    <div className="Balance">
      <p style={{ color: "gray" }}>YOUR BALANCE</p>
      <h2>₹{props.balance}</h2>
      <p>Saving A/C {props.accountNumber}</p>
      <i className="far fa-eye-slash"></i>
    </div>
  );
}

export default Balance;

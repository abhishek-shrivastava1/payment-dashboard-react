import React from "react";

function Offer(props) {
  return (
    <div className="Offer">
      <img src={props.img} alt="" />
      <h6>{props.title}</h6>
      <p>{props.content}</p>
      <button className="btn btn-outline-secondary buy-btn">Buy Now</button>
    </div>
  );
}

export default Offer;

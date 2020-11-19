import React from "react";

const Brand = (props) => {
  return (
    <div className="Brand">
      <i className={props.img}></i>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Brand;

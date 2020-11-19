import React from "react";

// const style = { display: "flex", alignItems: "center" };

function SidebarContent(props) {
  return (
    <div className="SidebarContent">
      <i className={props.icon}></i>
      <p>{props.name}</p>
    </div>
  );
}

export default SidebarContent;

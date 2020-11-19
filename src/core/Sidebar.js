import React, { useState } from "react";
import { brandDetail, offer, profile } from "../asset/data/service";
import Brand from "../components/Brand";
// import SidebarContent from "../components/SidebarContent";
import Offer from "../components/Offer";
import ProfileCard from "../components/ProfileCard";

function Sidebar(props) {
  const [selected, setSelected] = useState("Overview");
  const selectedStyle = { color: "purple" };
  const unselectedStyle = { color: "gray" };
  // const selectedPStyle = { color: "black" };
  // const unselectedPStyle = { color: "gray" };

  function handleClick(event) {
    if (event.target.innerText === "Overview") setSelected("Overview");
    else if (event.target.innerText === "Reports") setSelected("Reports");
    else if (event.target.innerText === "Cards") setSelected("Cards");
    else if (event.target.innerText === "Support") setSelected("Support");
    else setSelected("Overview");
  }

  return (
    <div className="Sidebar">
      <Brand img={brandDetail.logo} name={brandDetail.name} />
      {/* {sidebarContent.map(content => <SidebarContent icon={content.icon} name={content.name} />)}; */}
      <div
        className="SidebarContent"
        style={selected === "Overview" ? selectedStyle : unselectedStyle}
        onClick={handleClick}
      >
        <i className="fas fa-vector-square"></i>
        <p>Overview</p>
      </div>
      <div
        className="SidebarContent"
        style={selected === "Reports" ? selectedStyle : unselectedStyle}
        onClick={handleClick}
      >
        <i className="far fa-chart-bar"></i>
        <p>Reports</p>
      </div>
      <div
        className="SidebarContent"
        style={selected === "Cards" ? selectedStyle : unselectedStyle}
        onClick={handleClick}
      >
        <i className="far fa-credit-card"></i>
        <p>Cards</p>
      </div>
      <div
        className="SidebarContent"
        style={selected === "Support" ? selectedStyle : unselectedStyle}
        onClick={handleClick}
      >
        <i className="fas fa-phone-alt"></i>
        <p>Support</p>
      </div>
      <Offer img={offer.img} title={offer.title} content={offer.content} />
      <ProfileCard
        name={profile.name}
        img={profile.img}
        designation={profile.designation}
      />
    </div>
  );
}

export default Sidebar;

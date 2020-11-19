import React from "react";
import CircleUserImage from "../components/CircleUserImage";

function ProfileCard(props) {
  return (
    <div className="ProfileCard">
      <CircleUserImage img={props.img} />
      {/* <img src={props.img} alt="" srcset="" /> */}
      <div className="profile-detail">
        <h6>{props.name}</h6>
        <p>{props.designation}</p>
      </div>
    </div>
  );
}

export default ProfileCard;

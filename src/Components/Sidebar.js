import React from "react";
import "../Components/Dashboard.css";
import { AiFillGift } from "react-icons/ai";
import ProfilePic from "../images/mainLogo.png";

import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <img className="image" src={ProfilePic} alt="Logo" />
        <Link to="/draft">
          <span>
            <AiFillGift />
            &nbsp; My Recruitment
          </span>
        </Link>
        <Link to="/">
          <span>
            <AiFillGift />
            &nbsp; My Recruitment
          </span>
        </Link>

        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
      </div>
    </>
  );
};

export default Sidebar;

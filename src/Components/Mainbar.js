import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import ProfilePic from "../images/avatar.png";
import "../Components/Mainbar.css";
const Mainbar = () => {
  return (
    <>
      <ul className="mainbar">
        {/* <img className="haedingimg" src={headerBackground} alt="Logo" /> */}
        <ul>
          <li className="Mainbar-heading">My Recruitment</li>
        </ul>

        <ul>
          <li className="mx-2">
            <select id="cars">
              <option value="volvo" selected>En</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
              <option value="audi" >
                Audi
              </option>
            </select>
          </li>
          <li className="bell-Icon">
            <BsFillBellFill />
          </li>
          <div className="media-user">
            <div className="avatar">
              <img src={ProfilePic} alt="" />
            </div>
            <div className="media-body">
              <h6>John Doe</h6>
            </div>
            <li className="bell-Icon">
              {" "}
              <RiArrowDropDownLine />
            </li>
          </div>
        </ul>
      </ul>
    </>
  );
};

export default Mainbar;

import React from "react";
import { Link } from "react-router-dom";
import "../Components/Dashboard.css";
const Topbar = () => {
  return (
    <div>
      <ul className="heading">
        {/* <img className="haedingimg" src={headerBackground} alt="Logo" /> */}
        <ul
          style={{
            display: "flex",
            fontSize: "20px",
            fontWeight: 400,
            fontFamily: "Roboto",
            listStyle: "none",
            color:"#898989",
          }}
        >
          <Link to="/">
            <li className="haeding-btn">Active</li>
          </Link>
          <Link to="archive">
            <li className="haeding-btn mx-2">Archive</li>
          </Link>
          <Link to="darft">
            <li className="haeding-btn mx-2">Draft</li>
          </Link>
        </ul>

        <ul  style={{ listStyle: "none" }}>

          <Link to="draft"  >
            <button className="btn-main"  type="submit">
              Create New Recruitement
            </button>
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default Topbar;

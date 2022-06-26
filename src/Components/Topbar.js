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
          }}
        >
          <Link to="/">
            <li>Active</li>
          </Link>
          <Link to="archive">
            <li className="mx-2">Archive</li>
          </Link>
          <Link to="darft">
            <li className="mx-2">Draft</li>
          </Link>
        </ul>

        <ul style={{ listStyle: "none" }}>

          <Link to="draft" className="heading-btn">
            <button class="btn " type="submit">
              Create New Recruitement
            </button>
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default Topbar;

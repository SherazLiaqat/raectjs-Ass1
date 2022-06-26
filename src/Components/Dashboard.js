import React from "react";
import "../Components/Dashboard.css";
import ProfilePic from "../images/mainLogo.png";

import { Link } from 'react-router-dom'
// import BasicTable from "../BasicTable";

// import Form from "./Form";
const Dashboard = () => {
  return (
    <>
      {/* sidebar */}
      {/* <div class="sidebar">
        <img className="image" src={ProfilePic} alt="Logo" />
        <Link to="/draft">
          <span>
            <AiFillGift />
            &nbsp; My Recruitment
          </span>
        </Link>

        <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
      </div> */}

      <div class="main">
        {/* <Topbar /> */}
        {/* <Mainbar /> */}
        <div
          style={{
            background: "#fff",
            margin: "20px",
            borderRadius: "5px",
            padding: "20px",
          }}
        >
          {/* <Form />
          <BasicTable /> */}
          {/* <Heading/>
          <BasicTable /> */}
        </div>
        <h2>Sidebar with Icons</h2>
        <p>This side navigation is of full height (100%) and always shown.</p>
        <p>
          Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
          ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec
          et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
          ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec
          et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.
        </p>
        /* footer section
      </div>
    </>
  );
};

export default Dashboard;

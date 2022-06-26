import React from "react";
import "../Components/Dashboard.css";
import { BiHelpCircle } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <div class="dropdown footer-dropDown ">
        <button
          class="btn btn-secondary dropdown-toggle rounded-0"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BiHelpCircle /> Help Center
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer-main">
        <ul>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>Terms of Services</li>
          <li>Terms of Sales</li>
          <li>Privacy policy & Cookies</li>
        </ul>

        <ul>
          <li> For subject-matter experts</li>
          <li>Help center</li>
          <li>Information for candidates</li>
        </ul>
        <ul>
          <li> For subject-matter experts</li>
          <li>Help center</li>
          <li>Information for candidates</li>
        </ul>
      </ul>
      <footer className="footer">© CertiJob 2021. All rights reserved.</footer>
    </>
  );
};

export default Footer;

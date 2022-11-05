import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Front = () => {
  return (
    <div className="main">
      <div className="hero">
        <h2>
          Government Of India
          <br />
          E-Service Website
        </h2>
      </div>
      <div className="Topnav">
        <h3>LOGO</h3>
        <Link to="/">Home</Link>
        <a href="#app">Book An Appointment</a>
        <Link to="/Service">Our Services</Link>
        <Link to="/about">About Us</Link>
        <div className="but">
          <button>
            <a href="https://aadhar-partner.netlify.app/">JOINUS</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Front;
{
  /* <div className="Dropdown">
          <div
            className="dropbtn_content"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <div class="dropbtn">
              Book
              <i class="fa fa-caret-down"></i>
            </div>
            {dropdown && (
              <div className="list">
                <a href="#Book">
                  <h6> Book an Appointments</h6>
                </a>
              </div>
            )}
          </div>
            </div>*/
}

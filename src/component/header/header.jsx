import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Front = () => {
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <div className="mainpage">
      {" "}
      <div className="hero">
        <h2>
          Government Of India
          <br />
          E-Service Website
        </h2>
      </div>
      <div className="Topnav">
        <h3>LOGO</h3>
        <Link to="/Home">Home</Link>
        <div className="Dropdown">
          <div
            className="dropbtn_content"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <button class="dropbtn">
              Book
              <i class="fa fa-caret-down"></i>
            </button>
            {dropdown && (
              <div className="list">
                <a href="#Book">
                  <h6> Book an Appointments</h6>
                </a>
              </div>
            )}
          </div>
        </div>
        <Link to="/Service">Our Services</Link>
        <Link to="/About">ABOUT US</Link>
        <div className="but">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
};
export default Front;

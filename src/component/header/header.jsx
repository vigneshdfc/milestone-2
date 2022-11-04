import React from "react";
import "./Header.css";

const Front = () => {
  return (
    <div className="mainpage">
      <div className="hero">
        <h2>
          Government Of India
          <br />
          E-Service Website
        </h2>
      </div>
      <div className="Topnav">
        <h3>LOGO</h3>
        <a href="#">Home</a>
        <a href="#">Book an Appointment</a>
        <a href="#">Our Services</a>
        <a href="#">About Us</a>
        <div className="but">
          <button>LOGIN</button>
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

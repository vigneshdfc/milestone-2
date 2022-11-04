import React from "react";
import "./service.css";
// import bank from "../ourservice/assets/Bank.svg";
// import update from "../ourservice/assets/upload.svg";
// import verified from "../ourservice/assets/verified.png";
// import fingerprint from "../ourservice/assets/fingerprint.svg";
// import check from "../../component/ourservice/assets/checkcircle.svg";

const Service = () => {
  return (
    <div className="styleservice">
      <div className="head">Our Services</div>
      <div id="quote">
        Services is the rent we pay for bring. It is the very purpose of life,
        and not something you do.
      </div>
      <div className="styleserivicesbox">
        <div className="styleservicesboxitem">
          <img src={verified} height={75} width={75} />
          <h3>Verify Mobile Number</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="styleservicesboxitem">
          <img src={bank} height={75} width={75} />
          <h3>Check Banklinking Status</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="styleservicesboxitem">
          <img src={fingerprint} width={75} height={75} />
          <h3>Lock & Unlock Biometrics</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="styleservicesboxitem">
          <img src={update} height={75} width={75} />
          <h3>Update History</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div id="head">
        <h1>Benefits</h1>
      </div>
      <div className="overall">
        <div className="circle">
          <img src={check} />
          <p>Hassle Free</p>
        </div>
        <div className="circle">
          <img src={check} />
          <p>Comfort in your home</p>
        </div>
        <div className="circle">
          <img src={check} />
          <p>Fair charges & pricing</p>
        </div>
        <div className="circle">
          <img src={check} />
          <p>100% Data privacy</p>
        </div>
        <div className="circle">
          <img src={check} />
          <p>Defined processing time</p>
        </div>
        <div className="circle">
          <img src={check} />
          <p>No more quess</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

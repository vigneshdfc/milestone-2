import React from "react";
import "./footer.css";

const Bottom = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h1>Contact us</h1>
        <h1>Follow us</h1>
      </div>
      <div className="button">
        <div>
          <button>Toll Free:123</button>
        </div>
        <div>
          <button>Email: 0123@gmail.com</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="policy">
        <div className="website">
          <div>
            <p>website policy</p>
          </div>
          <div>
            <p>Terms and Condition</p>
          </div>
        </div>
        <div className="privacy">
          <div>
            <p>Privacy policy</p>
          </div>
          <div>
            <p>Help</p>
          </div>
        </div>
        <div className="feedback">
          <div>
            <p>Feedback</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />

      <div className="copyrigts">
        <div>
          <h6>
            @copyrigt2022. All Rigts reserved terms of services privacy policy
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Bottom;

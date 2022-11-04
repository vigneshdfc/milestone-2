import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unknown from "./assets/unknownicon.jpg";
import star from "./assets/star.svg";
import "./slide.css";
const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="heading">
        <h1>REVIEWS</h1>
      </div>
      <div className="review">
        <Slider {...settings}>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Jhon</h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.9/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Kamal</h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.4/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Sundarram</h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.8/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Suresh kumar</h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.0/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Sofiya </h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.2/5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="customers_wrapper">
            <div className="customers">
              <div className="cus_de">
                <div>
                  <img src={unknown} width="50px" height="50px" />
                </div>
                <div>
                  <h2>Nihil Adhitya</h2>
                  <h5>Chennai,India</h5>
                </div>
              </div>
              <p>
                A performance review is a documented evaluation of how
                effectively a team member is meeting their goals and
                responsibilities. Receiving clear, action-oriented feedback can
                increase employee engagement and retention, so regular in-depth
                performance reviews are important.
              </p>
              <h3>Customer Rating</h3>
              <div className="rating">
                <div>
                  <img src={star} width="40px" height="40px" />
                </div>
                <div>
                  <span>4.7/5</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Client;

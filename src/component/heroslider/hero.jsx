import { useState, useRef } from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import com from "./imgs/comfortable.jpg";
import tym from "./imgs/timesave.jpg";
import dada from "./imgs/securitydata.jpg";
import long from "./imgs/long.jpg";
import customer from "./imgs/customerservice.jpg";
import friend from "./imgs/friendly.jpg";

export default function SimpleSlider() {
  const [slideIndex, setSlideindex] = useState(1);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  return (
    <div className="slder_show">
      <Slider {...settings}>
        <div>
          <img className={"image"} src={com} />
        </div>
        <div>
          <img className={"image"} src={tym} alt="abhi" />
        </div>
        <div>
          <img className={"image"} src={dada} alt="abhi" />
        </div>
        <div>
          <img className={"image"} src={friend} alt="abhi" />
        </div>
        <div>
          <img className={"image"} src={customer} alt="abhi" />
        </div>
        <div>
          <img className={"image"} src={long} alt="abhi" />
        </div>
      </Slider>
    </div>
  );
}

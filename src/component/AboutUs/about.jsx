import React from "react";
import "../AboutUs/about.css";
import iconone from "../../component/AboutUs/images/bu_sy.webp";
import icontwo from "../AboutUs/images/loc_ation.jpg";
import iconthree from "../AboutUs/images/hap_py.jpg";
const Heads = () => {
  const pictureo = new URL("../AboutUs/images/p1.jpg", import.meta.url);
  const picturet = new URL("../AboutUs/images/p2.webp", import.meta.url);
  const picturef = new URL("../AboutUs/images/p3.webp", import.meta.url);

  return (
    <>
      <div className="headContainer">
        <div className="headsWrapper">
          <div className="headImg">
            <img src={pictureo} alt="" />
          </div>
          <div>
            <h5>
              QUALITY IS OUR BUSINESS PLAN,HAPPY CUSTOMER IS GREATEST SOURCE
            </h5>
          </div>
        </div>
        <div className="headsWrapper">
          <div>
            <h5>TRUSTED AND QUALIFIED TRAINERS,EVERYWERE</h5>
          </div>
          <div className="headImg">
            <img src={picturet} alt="" />
          </div>
        </div>

        <div className="headsWrapper">
          <div className="headImg">
            <img src={picturef} alt="" />
          </div>
          <div>
            <h5>SAY BYE TO QUEUES.JUST BOOK AN APPOINTMENT</h5>
          </div>
        </div>
      </div>
      <div className="sty">
        <center>
          <div className="h">
            <h2>OUR STORY</h2>
          </div>
        </center>

        <div className="story">
          We created this website to solve the issues people facing with
          careless offline services.Our website charges fair and affordable
          prices where every people can make use of it.We give 100% data privacy
          and process work within the defined time.
        </div>
      </div>
      <div className="tree">
        <div className="a">
          <div>
            <img src={iconone} width="80%" height="300px" />
          </div>
          <div>
            <p>1000+ PARTNERS</p>
          </div>
        </div>

        <div className="a">
          <div>
            <img src={icontwo} width="100%" height="300px" />
          </div>
          <div>
            <p>700+ E-SERVICE CENTERS</p>
          </div>
        </div>

        <div className="a">
          <div>
            <img src={iconthree} width="80%" height="300px" />
          </div>
          <div>
            <p>1000+ SUCCESFULL SERVICES</p>
          </div>
        </div>
      </div>

      <div className="why">
        <div className="he">
          <center>
            <h1>WHY CHOOSE AADHAR</h1>
          </center>
        </div>
        <div className="she">
          Aadhar program was launced with a main objective to provide universal
          identity to every Indian resident. People can now get the card with
          much ease as its acceptance as a mandatory document for various
          intiatives has been officially made.In addition to this,it will help
          in reducing the corruption since every individual carries only one
          unique number. Considering the increasing acceptance of aadhar card it
          must for everyone to get issued.It is believed that the card will
          further be given more importance as more and more government schemes
          are being launched requiring it as a mandatory document.
        </div>
      </div>

      <div className="service">
        <div className="sone">
          <b>STAY HOME,STAY SAFE,JUST BOOK AN SERVICE.</b>
        </div>
        <div className="sotwo">
          <b>SIMPLY WANT TO MAKE WHAT YOU WANT.</b>
        </div>
      </div>
    </>
  );
};

export default Heads;

import React from "react";
import Client from "../../component/reviews/slide";
import SimpleSlider from "../heroslider/hero";
import Images from "../cardshover/cards";
import Appointment from "../forms/update";

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Images />
      <Client />
      <Appointment />
    </>
  );
};
export default Home;

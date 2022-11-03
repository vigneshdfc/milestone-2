import React from "react";
import Client from "../../component/reviews/slide";
import Bottom from "../../component/footer/footer";
import SimpleSlider from "../heroslider/hero";
import Images from  "../cardshover/cards";

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <Images />
      <Client />
      <Bottom />
    </>
  );
};
export default Home;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./component/header/header";
import SimpleSlider from "./component/heroslider/hero";
import Images from "./component/cardshover/cards";
import Appointment from "./component/forms/update";
import Userform from "./component/forms/apply";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Service from "./component/pages/service";
import AboutUs from "./component/AboutUs/about";
import Home from "./component/pages/Home";

const App = () => {
  return (
    <>
      <Front />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </>
  );
};
export default App;

import React from "react";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Front from "./component/header/header";
import Hero from "./component/heroslider/hero";
import Images from "./component/cardshover/cards";
import { Route, Routes } from "react-router-dom";
import Service from "./component/pages/Service";
import Home from "./component/pages/Home";
import Appoinment from "./component/forms/update";

const App = () => {
  return (
    <>
      <Front />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;

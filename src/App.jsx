import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./component/header/header";
import Service from "./component/pages/Service";
import Home from "./component/pages/Home";
import About from "./component/AboutUs/about";
import Bottom from "./component/footer/footer";

const App = () => {
  return (
    <>
      <Front />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Bottom />
    </>
  );
};
export default App;

import React from "react";
import Front from "./component/header/header";
import { Route, Routes } from "react-router-dom";
import Service from "./component/pages/Service";
import Home from "./component/pages/Home";
import Heads from "./component/AboutUs/about";
import Appointment from "./component/forms/update";

const App = () => {
  return (
    <>
      <Front />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<Heads />} />
        <Route path="Update" element={<Appointment />} />
      </Routes>
    </>
  );
};
export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./component/header/header";
import Service from "./component/pages/Service";
import Home from "./component/pages/Home";

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

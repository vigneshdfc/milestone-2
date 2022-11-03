import React from "react";
import { Route, Routes } from "react-router-dom";
// import Client from "./component/reviews/slide";
// import Bottom from "./component/footer/footer";
// import Partner from "./component/reviewpartner/review";
import Front from "./component/header/header";
// import SimpleSlider from "./component/heroslider/hero";
// import Images from "./component/cardshover/cards";
import Service from "./component/pages/Service";

import Home from "./component/pages/Home";

const App = () => {
  return (
    <>
      <Front />
      {/* <SimpleSlider />
      <Images />
      <Client />; */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/* <Bottom />; */}
    </>
  );
};
export default App;

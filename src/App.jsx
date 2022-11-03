import React from "react";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Partner from "./component/reviewpartner/review";
import Front from "./component/header/header";
import SimpleSlider from "./component/heroslider/hero";
import Images from "./component/cardshover/cards";
import Appointment from "./component/forms/update";
import Userform from "./component/forms/apply";
const App = () => {
  return (
    <>
      <Front />
      <SimpleSlider />
      <Images />
      <Client />;
      <Appointment />
      <Userform />
      <Bottom />;
    </>
  );
};
export default App;

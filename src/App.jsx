import React from "react";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Partner from "./component/reviewpartner/review";
// import Front from "../../WEB/Book/src/Components/Header";
import Front from "./component/header/header";
import SimpleSlider from "./component/heroslider/hero";

const App = () => {
  return (
    <>
      <Front />
      <SimpleSlider />
      <Client />
      <Bottom />
    </>
  );
};
export default App;

import React from "react";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Partner from "./component/reviewpartner/review";
import Front from "./component/header/header";

const App = () => {
  return (
    <>
      <Front />
      <Client />;
      <Bottom />;
    </>
  );
};
export default App;

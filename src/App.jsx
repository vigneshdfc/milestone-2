import React from "react";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Partner from "./component/reviewpartner/review";
import Front from "../../WEB/Book/src/Components/Header";

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

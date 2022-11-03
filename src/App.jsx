import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./component/header/header";
import SimpleSlider from "./component/heroslider/hero";
import Images from "./component/cardshover/cards";
import Appointment from "./component/forms/update";
import Userform from "./component/forms/apply";
import Client from "./component/reviews/slide";
import Bottom from "./component/footer/footer";
import Service from "./component/ourservice/service";
import Home from "./component/pages/Home";
export const UserContext = React.createContext(false);
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  );
};
export default App;

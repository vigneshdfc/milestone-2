import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./component/header/header";
import SimpleSlider from "./component/heroslider/hero";
import Images from "./component/cardshover/cards";
import Appointment from "./component/forms/update";
import Userform from "./component/forms/apply";

export const UserContext = React.createContext(false);
const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Front />
      <SimpleSlider />
      <Images />
      <Client />
      <UserContext.Provider value={{ open, setOpen }}>
        <Appointment />
        <Userform />
      </UserContext.Provider>
      <Bottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;

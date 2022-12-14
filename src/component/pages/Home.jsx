import React from "react";
import Client from "../../component/reviews/slide";
import SimpleSlider from "../heroslider/hero";
import Images from "../cardshover/cards";
import Appointment from "../forms/update";
import Bottom from "../../component/footer/footer";
import UserForm from "../forms/apply";

export const UserContext = React.createContext(false);
const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SimpleSlider />
      <Images />
      <Client />
      <UserContext.Provider value={{ open, setOpen }}>
        <Appointment />
        <UserForm />
      </UserContext.Provider>
      <Bottom />
    </>
  );
};
export default Home;

import React from "react";
import Client from "../../component/reviews/slide";
import SimpleSlider from "../heroslider/hero";
import Images from "../cardshover/cards";
<<<<<<< HEAD
import Appointment from "../forms/update";
import UserForm from "../forms/apply";
=======
import Bottom from "../../component/footer/footer";
>>>>>>> e6ad5a1d7f406960f63f93eb10bfcecf29e1d2f1

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

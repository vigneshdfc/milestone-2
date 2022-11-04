import React from "react";
import Client from "../../component/reviews/slide";
import Bottom from "../../component/footer/footer";
import SimpleSlider from "../heroslider/hero";
import Images from "../cardshover/cards";

export const UserContext = React.createContext(false);
const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <SimpleSlider />
      <Images />
      <Client />
      <UserContext.Provider value={{ open, setOpen }}></UserContext.Provider>
      <Bottom />
    </>
  );
};
export default Home;

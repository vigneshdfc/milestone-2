import React from "react";
import Client from "../../component/reviews/slide";
import SimpleSlider from "../heroslider/hero";
import Images from "../cardshover/cards";
import Bottom from "../../component/footer/footer";

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

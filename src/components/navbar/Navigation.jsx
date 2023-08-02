import React, { useState } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { links } from "./links";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer links={links} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar links={links} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;

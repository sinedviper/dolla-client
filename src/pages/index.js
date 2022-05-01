import React, { useState } from "react";
import Sidebar from "../components/sidebar/index";
import Navbar from "../components/navbar/index";
import HeroSection from "../components/heroSection/index";
import InfoSection from "../components/infoSection/index";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/Data";
import Services from "../components/services";
import Footer from "../components/foooter";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;

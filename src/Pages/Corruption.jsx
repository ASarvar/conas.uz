import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import CorruptionPage from "../components/CorruptionPage/CorruptionPage";

const Corruption = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <CorruptionPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Corruption;

import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import DiplomaPage from "../components/DiplomaPage/DiplomaPage";

const Diploma = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <DiplomaPage/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Diploma;

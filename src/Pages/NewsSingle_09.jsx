import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import NewsSingle from "../components/News/NewsSingle_09";

const NewsSingle_09 = () => {
  return (
    <>
      <Header position="menu_nav" />
      <NewsSingle />
      <Footer />
      <FooterBottom />
    </>
  );
};
export default NewsSingle_09;

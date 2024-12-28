import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import NewsSingle from "../components/News/NewsSingle_02";

const NewsSingle_02 = () => {
  return (
    <>
      <Header position="menu_nav" />
      <NewsSingle />
      <Footer />
      <FooterBottom />
    </>
  );
};
export default NewsSingle_02;

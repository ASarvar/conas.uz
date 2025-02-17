import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Advantages from "../components/Advantages/Advantages";
import Project from "../components/Projects/Projects";

const Projects = () => {
  return (
    <>
      <Header position="menu_nav" />
      <Project />
      <Advantages />
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Projects;

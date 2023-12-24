import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Project from '../components/Projects/Project'

const Projects = () => {
  return (
    <>
      <Header position="menu_nav"/>
      <Project/>
      <Footer />
      <FooterBottom />
    </>
  );
};
export default Projects;

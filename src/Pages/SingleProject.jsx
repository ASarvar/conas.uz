import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Project from "../components/Projects/SingleProject";

const SingleProject = () => {
  const { projectId } = useParams();
  console.log(projectId);

  return (
    <>
      <Header position="menu_nav" />
      <Project projectId={projectId} />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default SingleProject;

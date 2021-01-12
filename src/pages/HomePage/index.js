import React from "react";
import Main from "../../components/Main";
import Projects from "../../components/Projects";
import About from "../../components/About";
import Contact from "../../components/Contact";
import "../../App.css";

const HomePage = () => {
  return (
    <>
      <Main />
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;

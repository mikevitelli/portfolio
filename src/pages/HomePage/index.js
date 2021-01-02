import React from "react";
import Main from "../../components/Main";
// import { Container, Row, Col } from "react-bootstrap";
import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";
// import Projects from "../ProjectsPage";
import "../../App.css";
import ReactPageScroller from "react-page-scroller";

const HomePage = () => {
  return (
    <ReactPageScroller>
      <Main className="my-auto" />
      <AllSpeak />
      <ChopCheese />
      <RememberDat />
      {/* <Projects /> */}
    </ReactPageScroller>
  );
};

export default HomePage;

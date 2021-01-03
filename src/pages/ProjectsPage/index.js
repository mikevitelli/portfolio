import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";
import Main from "../../components/Main";
import ReactPageScroller from "react-page-scroller";

const Projects = () => {
  return (
    <>
      <Container className="my-auto">
        <Row>
          <div style={{ height: 50 }}></div>
        </Row>
        <Row className="align-items-center">
          <Col>
            <Main />
          </Col>
        </Row>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <div style={{ height: 150 }}></div>
        </Row>
        <Row>
          <Col>
            <AllSpeak />
          </Col>
        </Row>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
        <ChopCheese />
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
        <Row>
          <Col>
            <RememberDat />
          </Col>
        </Row>
        <Row>
          <div style={{ height: 150 }}></div>
        </Row>
      </Container>
    </>
  );
};

export default Projects;

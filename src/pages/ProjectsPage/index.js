import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";

import ReactPageScroller from "react-page-scroller";

const Projects = () => {
  return (
    <>
      <Container className="my-auto">
        <Row>
          <div style={{ height: 500 }}></div>
        </Row>
        <Row>
          <Col>
            <AllSpeak />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <div style={{ height: 500 }}></div>
        </Row>
        {/* <Row>
          <Col>
          </Col>
        </Row> */}
        <ChopCheese />
      </Container>

      <Container>
        <Row>
          <div style={{ height: 500 }}></div>
        </Row>
        <Row>
          <Col>
            <RememberDat />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;

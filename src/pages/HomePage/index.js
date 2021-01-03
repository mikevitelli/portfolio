import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";
import Main from "../../components/Main";
import "../../App.css";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <div style={{ height: 100 }}></div>
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

export default HomePage;

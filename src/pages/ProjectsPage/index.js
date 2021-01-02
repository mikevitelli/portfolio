import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AllSpeak from "../../components/Cards/AllSpeak";
import ChopCheese from "../../components/Cards/ChopCheese";
import RememberDat from "../../components/Cards/RememberDat";

import ReactPageScroller from "react-page-scroller";

const Projects = () => {
  return (
    <>
      <ReactPageScroller>
        <Container>
          <Row>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className="
  d-flex justify-content-center"
            >
              <AllSpeak />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className="
  d-flex justify-content-center"
            >
              <ChopCheese />
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className="
  d-flex justify-content-center"
            >
              <RememberDat />
            </Col>
          </Row>
        </Container>
      </ReactPageScroller>
    </>
  );
};

export default Projects;

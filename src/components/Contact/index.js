import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import Icons from "../Icons";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Jumbotron className="shadow-lg rounded border-dark mt-5">
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col xs lg="6">
                <h1>Contact</h1>
                <br />

                <h3>mike@mikevitelli.com</h3>

                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ justifyContent: "center", display: "flex" }}>
                <Icons />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Wrapper>
    </>
  );
};

export default Contact;

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
                <h1>Contact Me</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  magni nulla libero dignissimos architecto, odit eius debitis
                  reiciendis recusandae quae. Debitis ex ipsa quas reprehenderit
                  reiciendis ea iure animi corporis.
                </p>
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

import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import Me from "../../assets/img/fb_size.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarGroup } from "@material-ui/lab";

import { Avatar } from "@material-ui/core";

import { faFile } from "@fortawesome/free-solid-svg-icons";

import "../../App.css";

const About = () => {
  return (
    <>
      <Wrapper>
        <Jumbotron className="shadow-lg rounded border-dark mt-5">
          <Container fluid>
            <Row>
              <Col>
                <h1>About</h1>
                <br />
                <p>
                  Mike Vitelli is a brooklyn-based freelance documentary
                  photographer and web developer. He recently earned a coding
                  certificate from Columbia University. His aim is to blend
                  creative visual expertise with elegant, artistic design
                  principles to build dynamic, innovative, and immersive user
                  experiences.
                </p>

                <h4>Resume:</h4>

                <AvatarGroup style={{ justifyContent: "center" }}>
                  <Avatar className="grow">
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRhnfA7vXOrYX_xSAqSHlI1pbs2NBkTPhH19JSMKzgrSKwY2mTYYPUEUqakQVWLbZitT8XotrRzRo2i/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFile} />
                    </a>
                  </Avatar>
                  <Avatar className="grow">
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRhnfA7vXOrYX_xSAqSHlI1pbs2NBkTPhH19JSMKzgrSKwY2mTYYPUEUqakQVWLbZitT8XotrRzRo2i/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFile} />
                    </a>
                  </Avatar>
                </AvatarGroup>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <Image
                  src={Me}
                  alt="mike vitelli"
                  width={200}
                  height={200}
                  roundedCircle
                  style={{ marginTop: "10%", marginBottom: "10%" }}
                />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Wrapper>
    </>
  );
};

export default About;

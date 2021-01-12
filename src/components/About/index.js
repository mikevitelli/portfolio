import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import Me from "../../assets/img/fb_size.jpg";

const About = () => {
  return (
    <>
      <Wrapper>
        <Jumbotron className="shadow-lg rounded border-dark mt-5">
          <Container fluid>
            <Row>
              <Col>
                <h1>About Me</h1>
                <br />
                <p>
                  mike vitelli is a brooklyn-based freelance documentary
                  photographer. his work has been featured online in vogue, i-d
                  vice, w magazine, town and country, wwd, elle, the last
                  magazine, among others. mike vitelli is a brooklyn-based
                  freelance documentary photographer. his work has been featured
                  online in vogue, i-d vice, w magazine, town and country,
                  wwd,mike vitelli is a brooklyn-based freelance documentary
                  photographer. his work has been featured online in vogue, i-d
                  vice, w magazine, town and country, wwd, elle, the last
                  magazine, among others.
                </p>
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

// gonna have to have an image and then info about me

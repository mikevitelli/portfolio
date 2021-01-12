import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import RotatingText from "../Typical";
import Wrapper from "../../components/Wrapper";
import Me from "../../assets/img/fb_size.jpg";
// import "./style.css";

const Main = () => {
  return (
    <Wrapper>
      <Container className="fluid justfiy-content-center">
        <Row>
          <Col
            className="col-12 mt-5
d-flex justify-content-center"
          >
            <Jumbotron className="shadow-lg rounded border-dark">
              <Image
                src={Me}
                alt="mike vitelli"
                width={200}
                height={200}
                roundedCircle
              />
              <h2 className="mt-4">Hi, I'm Mike Vitelli</h2>

              <p>
                I am a{" "}
                <RotatingText
                  steps={[
                    "Developer",
                    2000,
                    "Designer",
                    2000,
                    "Photographer",
                    2000,
                    "Media Artist",
                    2000,
                    "Creative",
                    2000,
                  ]}
                />
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Main;

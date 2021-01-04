import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import RotatingText from "../Typical";
import Wrapper from "../../components/Wrapper";
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
                src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/94146782_4045071292177366_3401569022750228480_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=Esq0s0KsrCoAX9HRHUW&_nc_ht=scontent-lga3-2.xx&oh=9bc9f8b53456c7386acaafc45a3b8b2a&oe=5FFDDE83"
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

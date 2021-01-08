import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";

const ProjectTemplate = (props) => {
  const { img, altImg, title, description } = props;

  return (
    <Wrapper>
      <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <Image src={img} alt={altImg} fluid />
            </Col>

            <Col>
              <h1>{title}</h1>
              <p>{description}</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default ProjectTemplate;

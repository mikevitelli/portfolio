import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import ProjectWrapper from "../ProjectWrapper";

const ProjectTemplate = (props) => {
  const {
    img,
    alt,
    title,
    description,
    deployedUrl,
    repo,
    role,
    stack,
  } = props;

  return (
    <ProjectWrapper>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Image src={img} alt={alt} width={600} height={600} fluid />
      </Col>

      <Col>
        <h1>{title}</h1>
        <p>{description}</p>

        <p>
          <strong>Built with </strong>
          {stack}
        </p>

        <p>
          <strong>Role: </strong>
          {role}
        </p>

        <Row>
          <Col>
            <Button href={deployedUrl} variant="outline-dark">
              Demo
            </Button>
          </Col>
          <p>|</p>
          <Col>
            <Button href={repo} variant="outline-dark">
              Repo
            </Button>
          </Col>
        </Row>
      </Col>
    </ProjectWrapper>
  );
};

export default ProjectTemplate;

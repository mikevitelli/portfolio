import React from "react";
import { Col, Image } from "react-bootstrap";
import ProjectWrapper from "../ProjectWrapper";

const ProjectTemplate = (props) => {
  const { img, altImg, title, description } = props;

  return (
    <ProjectWrapper>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Image src={img} alt={altImg} width={600} height={600} fluid />
      </Col>

      <Col>
        <h1>{title}</h1>
        <p>{description}</p>
      </Col>
    </ProjectWrapper>
  );
};

export default ProjectTemplate;

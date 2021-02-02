import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import ProjectWrapper from "../ProjectWrapper";

const ProjectTemplate = (props) => {
  const { img, altImg, title, description, deployedUrl, repo } = props;

  return (
    <ProjectWrapper>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Image src={img} alt={altImg} width={600} height={600} fluid />
      </Col>

      <Col>
        <h1>{title}</h1>
        <p>{description}</p>

        <Row>
          <Col>
            <p>
              <a href={deployedUrl}>Deployed</a>
            </p>
          </Col>
          |
          <Col>
            <p>
              <a href={repo}>Repo</a>
            </p>
          </Col>
        </Row>
      </Col>
    </ProjectWrapper>
  );
};

export default ProjectTemplate;

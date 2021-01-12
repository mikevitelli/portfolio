import React from "react";
// import Wrapper from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <Container fluid>
      <Row>
        <div style={{ height: 150 }}></div>
      </Row>
      <Row>
        <Col>
          <AvatarGroup max="3">
            <Avatar>
              <FontAwesomeIcon icon={faInstagram} />
            </Avatar>
            <Avatar>
              <FontAwesomeIcon icon={faLinkedin} />
            </Avatar>
            <Avatar>
              <FontAwesomeIcon icon={faGithub} />
            </Avatar>
          </AvatarGroup>
        </Col>
      </Row>
      <Row>
        <div style={{ height: 150 }}></div>
      </Row>
    </Container>
  );
};

export default Icons;

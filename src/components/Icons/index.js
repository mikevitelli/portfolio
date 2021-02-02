import React from "react";
// import Wrapper from "../../components/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

// import { Container, Row, Col } from "react-bootstrap";
import "../../App.css";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <AvatarGroup spacing="5">
      <Avatar className="grow">
        <FontAwesomeIcon icon={faInstagram} />
      </Avatar>
      <Avatar className="grow">
        <FontAwesomeIcon icon={faLinkedin} />
      </Avatar>
      <Avatar className="grow">
        <FontAwesomeIcon icon={faGithub} />
      </Avatar>
    </AvatarGroup>
  );
};

export default Icons;
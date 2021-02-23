import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

import "../../App.css";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faCamera } from "@fortawesome/free-solid-svg-icons";

const Icons = (props) => {
  const {
    linkedin = "https://www.linkedin.com/in/mike-vitelli",
    instagram = "https://www.instagram.com/mikevitelli/",
    github = "https://github.com/mikevitelli",
    photo = "https://www.mikevitelli.com",
  } = props;

  return (
    <AvatarGroup spacing="5">
      <Avatar className="grow">
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Avatar>
      <Avatar className="grow">
        <a href={photo} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCamera} />
        </a>
      </Avatar>
    </AvatarGroup>
  );
};

export default Icons;

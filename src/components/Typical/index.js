import React from "react";
import Typical from "react-typical";

const RotatingText = (props) => {
  return (
    <Typical
      //   steps={["Hello", 1000, "Hello world!", 500]}
      steps={props.steps}
      loop={Infinity}
      wrapper="b"
    />
  );
};

export default RotatingText;

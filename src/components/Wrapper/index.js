import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Wrapper = (props) => {
  return (
    <Container>
      <Row>
        <Col
          xl={12}
          lg={12}
          md={12}
          sm={12}
          className="mt-5
d-flex justify-content-center"
        >
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default Wrapper;

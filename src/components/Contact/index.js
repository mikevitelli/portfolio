import React from "react";
import { Container, Row, Col, Jumbotron, Form } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <Jumbotron className="shadow-lg rounded border-dark mt-5">
          <Container fluid>
            <Row className="justify-content-md-center">
              {/* <Col xs={12} sm={12} md={12} lg={6} xl={6}></Col> */}
              <Col xs lg="6">
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Example multiple select</Form.Label>
                    <Form.Control as="select" multiple>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>{" "}
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Wrapper>
    </>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
// import Wrapper from "../../Wrapper";

const RememberDat = () => {
  return (
    <Jumbotron className="shadow-lg rounded border-dark mt-5">
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Image
              src="https://github.com/mikevitelli/rememberDat/raw/main/public/assets/rememberDat_logo_startpage.png"
              fluid
            />
          </Col>

          <Col>
            <h5>RememberDat</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, veritatis neque earum reprehenderit ipsum provident
              dolorem consectetur ipsa nulla praesentium obcaecati eligendi
              pariatur numquam voluptatum inventore, eaque, asperiores nesciunt.
              Molestiae. Accusamus vitae magnam maiores, voluptate sint animi
              nesciunt rem enim, consequuntur omnis eum a? Officiis nihil quis
              accusantium odio repellat assumenda nam illo beatae atque. Quam
              incidquod, at eveniet ex distinctio corrupti accusantium
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default RememberDat;

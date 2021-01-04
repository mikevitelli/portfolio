import React from "react";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
import Wrapper from "../../Wrapper";

const ChopCheese = () => {
  return (
    <Wrapper>
      <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <h5>ChopCheese</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, veritatis neque earum reprehenderit ipsum provident
                dolorem consectetur ipsa nulla praesentium obcaecati eligendi
                pariatur numquam voluptatum inventore, eaque, asperiores
                nesciunt. Molestiae. Accusamus vitae magnam maiores, voluptate
                sint animi nesciunt rem enim, consequuntur omnis eum a? Officiis
                nihil quis accusantium odio repellat assumenda nam illo beatae
                atque. Quam incidunt doloribus laboriosam vero. Id consequuntur
                consequatur aspernatur, eaque tenetur, modi quod, at eveniet ex
                distinctio corrupti accusantium
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
              <Image
                src="https://github.com/mikevitelli/chopCheese/raw/main/assests/chopCheese-logo-vector-black-txt.png"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default ChopCheese;

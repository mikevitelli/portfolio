import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import Wrapper from "../../Wrapper";

const AllSpeak = () => {
  return (
    <Wrapper>
      <Jumbotron className="shadow-lg rounded border-dark mt-5">
        <Container>
          <Row>
            <Col>
              <img
                width={500}
                height={300}
                className="mr-3"
                src="https://github.com/kylegold/all-speak/raw/main/client/src/assets/logo/png/all_speak_v2_Logo_White.png"
                alt="Generic placeholder"
              />
            </Col>

            <Col>
              <h5>allspeak</h5>
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
          </Row>
        </Container>
      </Jumbotron>
    </Wrapper>
  );
};

export default AllSpeak;

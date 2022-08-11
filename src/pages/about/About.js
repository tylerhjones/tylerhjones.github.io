import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import { Mininav } from "../../components/mininav/MiniNav";

export const About = () => {
  return (
      <Container>
          <Row>
            <Mininav />
          </Row>
      <Row>
        <Col sm={2}>
          <Image
            className="img-fluid shadow-2-strong"
            roundedCircle
            src="https://s.gravatar.com/avatar/a171b0ccf4b52b9f55c693c1f6d65244?s=80"
          />
        </Col>
        <Col sm={8} floatLeft>
          <h1>Tyler Jones</h1>
          <p>Favors minimalism</p>
        </Col>
      </Row>
    </Container>
  );
};

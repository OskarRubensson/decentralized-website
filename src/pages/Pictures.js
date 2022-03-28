import { Col, Container, Image, Row } from "react-bootstrap";

// Fetch all images from images folder
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));

export default function Pictures() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1 className="pt-3">Pictures</h1>
        </Col>
      </Row>
      <Row>
        {images.map((image, index) => (
          <Col md={3} key={`img-${index}`}>
            <Image src={image} alt={index} style={{width: '100%'}}/> 
          </Col>
        ))}
      </Row>
    </Container>
  );
}

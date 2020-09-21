import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CarouselImg from "../../components/homepage/CarouselImg";
import JsonView from "../../components/homepage/JsonView";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Container className="position-relative" style={{ marginTop: '200px' }}>
        {/* <Image src="" /> */}
        <div className="mx-auto text-center desc-text mb-5">We provide accurate results by reflecting a model optimized for each document as well as supporting various languages.</div>
      </Container>
      <Container className="rounded bg-light position-relative pr-5 pl-5 pt-5 pb-5">
        <Row>
          <div style={{ fontSize: '1.3rem' }}>Try it now</div>
        </Row>
        <Row className="mt-5 mb-4 button-container">
          <Button className="custom-button" title="General OCR">General OCR</Button>
          <Button className="custom-button" title="Receipts">Receipts</Button>
          <Button className="custom-button" title="Credit Cards">Credit Cards</Button>
          <Button className="custom-button" title="Business Licenses">Business Licenses</Button>
        </Row>
        <Row className="">
          <div>Basic model that can recognize Korean and English.</div>
          <div>It extracts text accurately even in images with severe distortion or complexity, and has excellent handwriting recognition.</div>
        </Row>
        <Row>
          <Col>
            <CarouselImg />
          </Col>
          <Col>
            <Row></Row>
            <JsonView />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
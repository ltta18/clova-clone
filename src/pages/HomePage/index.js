import React, { useEffect, useState } from "react";
import CopyButton from "../../components/homepage/CopyButton";
import UploadButton from "../../components/homepage/UploadButton";
import Body from "../../components/homepage/Body";
import CarouselImg from "../../components/homepage/CarouselImg";
import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import "./index.css";


const HomePage = () => {
  const [ isText, setIsText ] = useState(true);

  useEffect(() => {
    document.getElementById('defaultChecked').focus();
    document.getElementById('defaultTextChecked').focus();
  }, [])

  return (
    <>
      {/* Logo */}
      <Container className="position-relative" style={{ marginTop: '200px' }}>
        {/* <Image src="" /> */}
        <div className="mx-auto text-center desc-text mb-5">We provide accurate results by reflecting a model optimized for each document as well as supporting various languages.</div>
      </Container>

      {/* Body Box */}
      <Container className="rounded bg-light position-relative pr-5 pl-5 pt-5 pb-5">
        {/* Try It */}
        <Row>
          <div className="try-it">Try it now</div>
        </Row>

        {/* Category Button */}
        <Row className="mt-5 mb-4 button-container">
          <Button id='defaultChecked' className="custom-button" title="General OCR" >General OCR</Button>
          <Button className="custom-button" title="Receipts">Receipts</Button>
          <Button className="custom-button" title="Credit Cards">Credit Cards</Button>
          <Button className="custom-button" title="Business Licenses">Business Licenses</Button>
        </Row>

        {/* Category Description */}
        <Row className="body-desc-text desc-text mb-4 mt-0">
          <div>Basic model that can recognize Korean and English.</div>
          <div>It extracts text accurately even in images with severe distortion or complexity, and has excellent handwriting recognition.</div>
        </Row>

        {/* Content Container*/}
        <Row>
          {/* Carousel */}
          <Col className="pl-0 p-style" sm={6}>
            <CarouselImg />
          </Col>

          {/* Text/Json */}
          <Col className="pr-0" style={{ border: '1px solid silver', borderBottom: '0' }} sm={6}>
            {/* Button Box */}
            <Row className="pt-3 pb-2 mr-0" style={{ borderBottom: '1px solid silver' }}>
              <button id="defaultTextChecked" className="body-button pl-3" onClick={() => setIsText(true)} title="Text">Text</button>
              <button className="body-button pl-3" onClick={() => setIsText(false)} title="Json">Json</button>
            </Row>

            {/* Content */}
            <Row><Body isText={isText} /></Row>

            {/* Copy/ Upload Button */}
            <Row className="mr-0">
              <CopyButton isText={isText} />
              <UploadButton />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
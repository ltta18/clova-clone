import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";
import Body from "../../components/homepage/Body";
import CarouselImg from "../../components/homepage/CarouselImg";
import "./index.css";
import copy from "copy-to-clipboard";
import { textObj, jsonObj } from '../../data/data';

const HomePage = () => {
  const [ isText, setIsText ] = useState(true);
  const [ fileName, setFileName ] = useState('');

  const displayFileName = (e) => {
    const file = e.target.value.split('\\')[2]
    setFileName(file)
  }

  const handleClickFileButton = (e) => {
    e.preventDefault();
    document.getElementById('inputFile').click();
  }

  const handleClickCopyButton = () => {
    console.log(jsonObj)
    const copyText = isText ? textObj : JSON.stringify(jsonObj)
    copy(copyText)
  }

  useEffect(() => {
    document.getElementById('defaultChecked').focus();
    document.getElementById('defaultTextChecked').focus();
  }, [])

  return (
    <>
      <Container className="position-relative" style={{ marginTop: '200px' }}>
        {/* <Image src="" /> */}
        <div className="mx-auto text-center desc-text mb-5">We provide accurate results by reflecting a model optimized for each document as well as supporting various languages.</div>
      </Container>
      <Container className="rounded bg-light position-relative pr-5 pl-5 pt-5 pb-5">
        <Row>
          <div className="try-it">Try it now</div>
        </Row>
        <Row className="mt-5 mb-4 button-container">
          <Button id='defaultChecked' className="custom-button" title="General OCR" >General OCR</Button>
          <Button className="custom-button" title="Receipts">Receipts</Button>
          <Button className="custom-button" title="Credit Cards">Credit Cards</Button>
          <Button className="custom-button" title="Business Licenses">Business Licenses</Button>
        </Row>
        <Row className="body-desc-text desc-text mb-4 mt-0">
          <div>Basic model that can recognize Korean and English.</div>
          <div>It extracts text accurately even in images with severe distortion or complexity, and has excellent handwriting recognition.</div>
        </Row>
        <Row>
          <Col className="pl-0 p-style" sm={6}>
            <CarouselImg />
          </Col>
          <Col className="pr-0" style={{ border: '1px solid silver', borderBottom: '0' }} sm={6}>
            <Row className="pt-3 pb-2 mr-0" style={{ borderBottom: '1px solid silver' }}>
              <button id="defaultTextChecked" className="body-button pl-3" onClick={() => setIsText(true)} title="Text">Text</button>
              <button className="body-button pl-3" onClick={() => setIsText(false)} title="Json">Json</button>
            </Row>
            <Row><Body isText={isText} /></Row>
            <Row className="mr-0">
              <Col className="flex-grow-0 pt-3 pb-3 pl-3 pr-3 ml-0" style={{ borderRight: "1px solid silver", borderTop: '1px solid silver', borderBottom: '1px solid silver' }}>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      Copy
                    </Tooltip>
                  }
                >
                  <div className="copy-icon" onClick={handleClickCopyButton}></div>
                </OverlayTrigger>
              </Col>
              <Col className="pr-0 pl-0">
                <Form className="h-100">
                  <Form.Group className="mb-0 h-100">
                    <Form.File id="inputFile" className="d-none" onChange={(e) => displayFileName(e)} />
                    <Container className="d-flex h-100 pr-0 pl-0">
                      <div className="inputFileName w-100 pt-2 pb-2 pr-2 pl-2 align-items-center" style={{ border: '1px solid silver', borderLeft: 0 }} fileName={fileName}></div>
                      <button target="_blank" className="inputFileButton float-right" onClick={(e) => handleClickFileButton(e)}></button>
                    </Container>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default HomePage;
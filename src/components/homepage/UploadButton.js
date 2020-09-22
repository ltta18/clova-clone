import React, { useState } from "react";
import {
  Container,
  Col,
  OverlayTrigger,
  Form,
  Popover
} from "react-bootstrap";

const UploadButton = ({ isText }) => {
  const [ fileName, setFileName ] = useState('');

  const displayFileName = (e) => {
    const file = e.target.value.split('\\')[2]
    setFileName(file)
  }

  const handleClickFileButton = (e) => {
    e.preventDefault();
    document.getElementById('inputFile').click();
  }

  return (
    <Col className="pr-0 pl-0">
      <Form className="h-100">
        <Form.Group className="mb-0 h-100">
          <Form.File id="inputFile" className="d-none" onChange={(e) => displayFileName(e)} />
          <Container className="d-flex h-100 pr-0 pl-0">
            <div className="inputFileName w-100 pt-2 pb-2 pr-2 pl-2 align-items-center" style={{ border: '1px solid silver', borderLeft: 0 }} fileName={fileName}></div>
            <OverlayTrigger
              show={true}
              placement="top"
              overlay={
                <Popover id="popover-positioned-top">
                  <Popover.Content>
                    <strong>Click Me!</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <button target="_blank" className="inputFileButton float-right" onClick={(e) => handleClickFileButton(e)}></button>
            </OverlayTrigger>
          </Container>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default UploadButton;
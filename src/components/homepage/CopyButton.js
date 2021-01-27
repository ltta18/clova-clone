import React from "react";
import copy from "copy-to-clipboard";
import {
  Col,
  Container,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import {
  textObj,
  jsonObj
} from '../../data/data';
import './CopyButton.css';

const CopyButton = ({ displayTab }) => {
  const handleClickCopyButton = () => {
    const copyText = displayTab === 'text' ? textObj : JSON.stringify(jsonObj);
    copy(copyText);

    const flashMessage = document.getElementsByClassName('flash-copy-message')[0];
    flashMessage.style.opacity= '1';
    setTimeout(() => { flashMessage.style.opacity= '0'; }, 2000);
    
  }

  return (
    <Col
      className="flex-grow-0 pt-3 pb-3 pl-3 pr-3 ml-0"
      style={{
        borderRight: "1px solid silver",
        borderTop: '1px solid silver',
        borderBottom: '1px solid silver'
      }}
    >
      <Container className="flash-copy-message" style={{ opacity: '0' }}>Copied to clipboard</Container>
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
  );
};

export default CopyButton;
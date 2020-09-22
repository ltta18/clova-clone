import React from "react";
import copy from "copy-to-clipboard";
import {
  Col,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import {
  textObj,
  jsonObj
} from '../../data/data';

const CopyButton = ({ isText }) => {
  const handleClickCopyButton = () => {
    const copyText = isText ? textObj : JSON.stringify(jsonObj)
    copy(copyText)
  }

  return (
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
  );
};

export default CopyButton;
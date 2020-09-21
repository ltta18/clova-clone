import React from "react";
import ReactJson from "react-json-view";
import * as json from '../../data/data.json';

const JsonView = () => {
  return (
    <ReactJson src={json} theme="rjv-default" displayDataTypes={false} />
  );
};

export default JsonView;
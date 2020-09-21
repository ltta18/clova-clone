import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Container className="position-relative" style={{ marginTop: '200px' }}>
        {/* <Image src="" /> */}
        <div className="mx-auto text-center desc-text">We provide accurate results by reflecting a model optimized for each document as well as supporting various languages.</div>
      </Container>
    </>
  );
};

export default HomePage;
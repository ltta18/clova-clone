import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/common/NavBar";
import { Image } from "react-bootstrap";
import HomePage from "./pages/HomePage";
// import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Image
        className="position-absolute"
        style={{ top: 0 }}
        src={require("./img/background.jpg")}
        fluid
      />
      <HomePage />
    </>
  );
}

export default App;

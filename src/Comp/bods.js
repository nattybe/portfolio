import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
class Bods extends Component {
  render() {
    return (
      <div>
        <div className="for-pic "> <h1>Hello my name is Natty</h1></div>
        <img className="d-block w-100" src="photo.jpg" alt="My pic" />
        <img className="d-block w-100" src="photo.jpg" alt="My pic" />
        <img className="d-block w-100" src="photo.jpg" alt="My pic" />
      </div>
    );
  }
}

export default Bods;

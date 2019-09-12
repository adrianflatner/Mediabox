import React, { Component } from "react";
import image from "./pictures/*";
import "./Images.css";

class Images extends Component {
  

  render() {
    return (
        <div className="frame"><img id="media" src={image}/></div>
    );
  }
}

export default Images;

import React, { Component } from "react";
import rich1 from "./pictures/richard1.svg";
import rich2 from "./pictures/richard2.svg";
import rich3 from "./pictures/richard3.svg";
import trump1 from "./pictures/trump1.svg";
import trump2 from "./pictures/trump2.svg";
import trump3 from "./pictures/trump3.svg";
import jaden1 from "./pictures/jaden1.svg";
import jaden2 from "./pictures/jaden2.svg";
import jaden3 from "./pictures/jaden3.svg";
import michael1 from "./pictures/michael1.svg";
import michael2 from "./pictures/michael2.svg";
import michael3 from "./pictures/michael3.svg";

const imagesPath = [
  [trump1, trump2, trump3],
  [rich1, rich2, rich3],
  [jaden1, jaden2, jaden3],
  [michael1, michael2, michael3]
];

class Images extends Component {
  render() {
    return (
      <div>
        <img src={imagesPath[this.props.activeTab][this.props.activePicture]} />
      </div>
    );
  }
}

export default Images;

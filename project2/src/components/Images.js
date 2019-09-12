import React, { Component } from "react";
import rich1 from "./pictures/richard1.svg";
import rich2 from "./pictures/richard2.svg";

const imagesPath = {
    minus: rich1,
    plus: rich2
  }
  
  class Images extends Component {
    state = {
      open: true
    }
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getImageName = () => this.state.open ? 'plus' : 'minus'
  
    render() {
      const imageName = this.getImageName();
      return (
        <div>
          <img src={imagesPath[imageName]} onClick={this.toggleImage} />
        </div>
      );
    }
  }
  

  export default Images;
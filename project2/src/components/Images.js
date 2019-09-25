import React, { Component } from "react";

const imagesPath = [
  ["trump1.svg", "trump2.svg", "trump3.svg"],
  ["richard1.svg", "richard2.svg", "richard3.svg"],
  ["jaden1.svg", "jaden2.svg", "jaden3.svg"],
  ["michael1.svg","michael2.svg", "michael3.svg"]
];


class Images extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      picture: null
    };
  }

  componentDidMount(){
    this.fetchImage()
  }

  fetchImage = () => {
    var x = this.props.activeTab
    var y = this.props.activePicture
    fetch(`pictures/${imagesPath[x][y]}` )
    .then(res => res.text())
    .then((picture) => {
      this.setState({
        picture: picture
      })
    });
  }

  render() {
    return (
      <div>
        {this.fetchImage()}
        <div dangerouslySetInnerHTML={{ __html: this.state.picture}} />
      </div>
    );
  }

}

export default Images;


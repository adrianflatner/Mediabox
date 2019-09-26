import React, { Component, PureComponent } from "react";

const imagesPath = [
  ["trump1.svg", "trump2.svg", "trump3.svg"],
  ["richard1.svg", "richard2.svg", "richard3.svg"],
  ["jaden1.svg", "jaden2.svg", "jaden3.svg"],
  ["michael1.svg","michael2.svg", "michael3.svg"]
];

const soundPath = [
  ["church.mp3", "lava.mp3", "rain.mp3"],
  ["mix.mp3", "ugotthat.mp3", "ocean.mp3"],
  ["underwater.mp3", "water.mp3", "sda"],
  ["isfj", "safija", "safjask"]
];

class Images extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      sound: ""
    };
  }

  componentDidMount = () => {
    this.fetchImage()
    this.fetchSound()
  }

  componentDidUpdate = (prevProps) => {
    this.fetchImage()
    if(prevProps.activeTab != this.props.activeTab || prevProps.activeSound != this.props.activeSound){
      this.fetchSound()
    }
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

  fetchSound = () => {
    var xx = this.props.activeTab
    var yy = this.props.activeSound
    var s = soundPath[xx][yy]
    this.setState({
      sound: "sounds/" + s
    },function(){
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
 })

  }

  render() {
    return (
      <div>
        <audio controls autoPlay loop ref="audio">
          <source src={this.state.sound} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
        <div dangerouslySetInnerHTML={{ __html: this.state.picture}} />
      </div>
    );
  }

}

export default Images;


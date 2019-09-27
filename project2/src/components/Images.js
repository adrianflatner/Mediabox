import React, { PureComponent } from "react";
import "./Images.css";

// Arrays of file adresses
const imagesPath = [
  ["trump1.svg", "trump2.svg", "trump3.svg"],
  ["richard1.svg", "richard2.svg", "richard3.svg"],
  ["jaden1.svg", "jaden2.svg", "jaden3.svg"],
  ["michael1.svg", "michael2.svg", "michael3.svg"]
];

const soundPath = [
  [
    "trumpimreallysmart.mp3",
    "trumpbingbing.mp3",
    "trumpgreatestjobspresident.mp3"
  ],
  ["richardtregodeting.mp3", "ugotthat.mp3", "mix.mp3"],
  ["underwater.mp3", "water.mp3", "ocean.mp3"],
  ["church.mp3", "lava.mp3", "rain.mp3"]
];

class Images extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      picture: "",
      sound: "",
      quote: ""
    };
  }

  // Selects image and quote on page load
  componentDidMount = () => {
    this.fetchImage();
    this.fetchQuote();
  };

  //Loads a new picture and quote on state change. Sound only changes when this.props.activeTab or this.props.activeSound changes.
  componentDidUpdate = prevProps => {
    this.fetchImage();
    this.fetchQuote();
    if (
      prevProps.activeTab != this.props.activeTab ||
      prevProps.activeSound != this.props.activeSound
    ) {
      this.fetchSound();
    }
  };

  // Uses fetch() to fetch image, and sets picturestate. Props is used to find correct address.
  fetchImage = () => {
    var x = this.props.activeTab;
    var y = this.props.activePicture;
    fetch(`pictures/${imagesPath[x][y]}`)
      .then(res => res.text())
      .then(picture => {
        this.setState({
          picture: picture
        });
      });
  };

  // Fetches sounds directly from public folder and sets soundstate. Props finds address.
  fetchSound = () => {
    var x = this.props.activeTab;
    var y = this.props.activeSound;
    var s = soundPath[x][y];
    this.setState(
      {
        sound: "sounds/" + s
      },
      function() {
        this.refs.audio.pause();
        this.refs.audio.load();
        this.refs.audio.play();
      }
    );
  };

  // Fetches quotes from a json-file and uses props to find correct quote.
  fetchQuote = () => {
    var x = this.props.activeTab;
    var y = this.props.activeQuote;
    fetch("quotes/quotes.json")
      .then(res => res.json())
      .then(q => {
        var output = q["person"][x][y];
        this.setState({
          quote: output
        });
      });
  };

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.picture }} />
        <div id="quote">"{this.state.quote}"</div>
        <audio controls loop ref="audio">
          <source src={this.state.sound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Images;

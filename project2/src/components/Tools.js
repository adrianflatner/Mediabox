import React, { Component } from "react";
import "./Tools.css";
import $ from "jquery";
import Images from "./Images.js";

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: 0,
      sound: 0,
      quote: 0
    };
  }

  componentDidMount() {
    $('input[type="checkbox"]').on("change", function() {
      $('input[name="' + this.name + '"]')
        .not(this)
        .prop("checked", false);
    });
  }

  changePicture = stateChange => {
    this.setState({
      picture: stateChange
    });
  };

  changeSound = stateChange => {
    this.setState({
      sound: stateChange
    });
  };

  changeQuote = stateChange => {
    this.setState({
      quote: stateChange
    });
  };

  pics = {
    0: ["Hair", "Retrd", "Smile"],
    1: ["Heisann", "Richard stirrer", "Smile"],
    2: ["Gden", "Smile", "Gayden"],
    3: ["Vsaus", "Mikael", "Sup ladies"]
  };

  sounds = {
    0: ["Ueeaa", "Grab pussy", "Church"],
    1: ["Terning ned", "Klikker", "Waves"],
    2: ["Shhh", "Click", "Sup"],
    3: ["Whistle", "Lava", "Blow"]
  };

  quotes = {
    0: ["Joakim", "Halvor", "Adrian"],
    1: ["Terning opp", "Enkelt og greit", "Frickin fresh"],
    2: ["kfm", "knf", "skdf"],
    3: ["kfm", "knf", "skdf"]
  };

  render() {
    return (
      <div className="Wrap">
        <div className="Artboard">
          <Images
            activeTab={this.props.activeTab}
            activePicture={this.state.picture}
            activeSound={this.state.sound}
            activeQuote={this.state.quote}
          />
        </div>
        <div id="pictures" className="textboxes">
          <h2>Photos:</h2>
          <label class="container">
            {this.pics[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(0)}
            />
            <span class="checkmark"></span>
          </label>
          <br />

          <label class="container" >
            {this.pics[this.props.activeTab][1]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(1)}
            />
            <span class="checkmark"></span>
          </label>
          <br />

          <label class="container">
            {this.pics[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(2)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div id="sounds" className="textboxes">
          <h2>Sounds:</h2>
          <label class="container">
            {this.sounds[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 2"
              onChange={() => this.changeSound(0)}
            />
            <span class="checkmark"></span>
          </label>
          <br />
          <label class="container">
            {this.sounds[this.props.activeTab][1]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 2"
              onChange={() => this.changeSound(1)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label class="container">
            {this.sounds[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 2"
              onChange={() => this.changeSound(2)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div id="quotes" className="textboxes">
          <h2>Quotes:</h2>
          <label class="container">
            {this.quotes[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(0)}
            />
            <span class="checkmark"></span>
          </label>
          <br />
          <label class="container">
            {this.quotes[this.props.activeTab][1]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(1)}
            />
            <span class="checkmark"></span>
          </label>
          <br />
          <label class="container">
            {this.quotes[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(2)}
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default Tools;

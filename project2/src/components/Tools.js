import React, { PureComponent } from "react";
import "./Tools.css";
import $ from "jquery";
import Images from "./Images.js";

class Tools extends PureComponent {
  constructor(props) {
    super(props);
    let start = this.load();
    this.state = {
      picture: start["picture"],
      sound: start["sound"],
      quote: start["quote"]
    };
  }

  // Checks session storage when the page is loaded and initializes the checkboxes
  componentDidMount() {
    $('input[type="checkbox"]').on("change", function() {
      $('input[name="' + this.name + '"]')
        .not(this)
        .prop("checked", false);
    });
    this.load();
  }

  // Functions for chaning picture, sound, and quote states
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

  changeUpdate = stateChange => {
    this.setState({ update: this.state.update ? false : true });
  };

  // Arrays for checkbox-labels
  pics = {
    0: ["What", "Weird", "Smile"],
    1: ["Bro", "Pose", "Couple"],
    2: ["Gden", "Water", "Red gloves"],
    3: ["Don't", "Turban", "Sup ladies"]
  };

  sounds = {
    0: ["Really Smart", "Bing Bing", "Jobs"],
    1: ["Tre gode ting", "Richardo", "ClubMix"],
    2: ["Under water", "River", "Rain"],
    3: ["Bells", "Lava", "Rain on roof"]
  };

  quotes = {
    0: ["Ivanka", "Jobs", "Fingers"],
    1: ["Fresh", "Terning ned", "Bucket list"],
    2: ["Mirrors", "Jupiter", "Asleep"],
    3: ["Stitious", "Don't do anything", "Kids"]
  };

  //Saves the current combination of states every time the component updates
  autoSave() {
    let current = {
      tab: this.props.activeTab,
      picture: this.state.picture,
      sound: this.state.sound,
      quote: this.state.quote
    };
    let session = JSON.stringify(current);
    sessionStorage.setItem("current", session);
  }
  //Returns what's in sessionStorage,
  load() {
    if (sessionStorage.getItem("current")) {
      let autosave = sessionStorage.getItem("current");
      return JSON.parse(autosave);
    } else {
      return { picture: 0, sound: 0, quote: 0 };
    }
  }
  //Saves the current combination into localStorage when the savebutton is clicked
  save() {
    let favourite = {
      tab: this.props.activeTab,
      picture: this.state.picture,
      sound: this.state.sound,
      quote: this.state.quote
    };
    let data = JSON.stringify(favourite);
    localStorage.setItem("favourite", data);
  }

  loadFavourite() {
    if (localStorage.getItem("favourite")) {
      let favourites = localStorage.getItem("favourite");
      let data = JSON.parse(favourites);
      this.setState({
        picture: data["picture"],
        sound: data["sound"],
        quote: data["quote"]
      });
    }
  }

  componentDidUpdate() {
    this.autoSave();
  }
  render() {
    //Checks if the savebutton in Navbar has been clicked
    if (this.props.saveBtn) {
      this.save();
      this.props.toggleSaveBtn();
    }
    //Checks if the loadbutton in Navbar has been clicked
    if (this.props.loadBtn) {
      this.loadFavourite();
      this.props.toggleLoadBtn();
      $('input[type="checkbox"]').prop("checked", false);
    }
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
          <h2 className="h2">Photos:</h2>
          <label className="container">
            {this.pics[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(0)}
            />
            <span className="checkmark"></span>
          </label>
          <br />

          <label className="container">
            {this.pics[this.props.activeTab][1]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(1)}
            />
            <span className="checkmark"></span>
          </label>
          <br />

          <label className="container">
            {this.pics[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 1"
              onChange={() => this.changePicture(2)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div id="sounds" className="textboxes">
          <h2 className="h2">Sounds:</h2>
          <label className="container">
            {this.sounds[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 2"
              onChange={() => this.changeSound(0)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container">
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
          <label className="container">
            {this.sounds[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 2"
              onChange={() => this.changeSound(2)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div id="quotes" className="textboxes">
          <h2 className="h2">Quotes:</h2>
          <label className="container">
            {this.quotes[this.props.activeTab][0]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(0)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container">
            {this.quotes[this.props.activeTab][1]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(1)}
            />
            <span className="checkmark"></span>
          </label>
          <br />
          <label className="container">
            {this.quotes[this.props.activeTab][2]}
            <input
              type="checkbox"
              className="checkbox"
              name="group 3"
              onChange={() => this.changeQuote(2)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    );
  }
}

export default Tools;

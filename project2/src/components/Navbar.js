import "./Navbar.css";
import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      color: "#000"
    };
  }

  setTab = (tab, color) => {
    this.setState({ tab, color });
  };

  render() {
    document.querySelector("div").style.color = this.state.color;

    return (
      <div className="grid">
        <button className="tab1" onClick={() => this.setTab(1, "red")}>
          Trump
        </button>
        <button className="tab2" onClick={() => this.setTab(2, "blue")}>
          Richard
        </button>
        <button className="tab3" onClick={() => this.setTab(3, "green")}>
          Jayden
        </button>
        <button className="tab4" onClick={() => this.setTab(4)}>
          Michael
        </button>
      </div>
    );
  }
}

export default Navbar;

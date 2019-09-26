import "./Navbar.css";
import React, { Component } from "react";
import Tools from "./Tools.js";


class Navbar extends Component {
  constructor(props) {
    super(props);
    let startTab = this.load();
    this.state = {
      tab: startTab,
      saveBtn: false,
      loadBtn: false,
    };
  }

  setTab = (tab) => {
    this.setState({ tab });
  };

  load(){
    if(sessionStorage.getItem("current")){
      return JSON.parse(sessionStorage.getItem("current"))["tab"];
    }else {
      return 0;
    }
  }

  render() {

    return (
      <div>
        <div className="grid">
          <button className="tab1" onClick={() => this.setTab(0)}>
            Trump
          </button>
          <button className="tab2" onClick={() => this.setTab(1)}>
            Richard
          </button>
          <button className="tab3" onClick={() => this.setTab(2)}>
            Jaden
          </button>
          <button className="tab4" onClick={() => this.setTab(3)}>
            Michael
          </button>
        </div>
        <div className="Artboard-tools">
          <Tools activeTab={this.state.tab} />
        </div>
      </div>
    );
  }
}

export default Navbar;

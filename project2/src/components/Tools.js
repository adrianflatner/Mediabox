import React, { Component } from 'react';
import './Tools.css';
import $ from 'jquery';
import Images from './Images.js';

class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: 0,
            sound: 0,
            quote: 0
        }
    }

    componentDidMount() {
        $('input[type="checkbox"]').on('change', function () {
            $('input[name="' + this.name + '"]').not(this).prop('checked', false);
        });
    }

    changePicture = (stateChange) => {
        this.setState({
            picture: stateChange
        });
    };

    changeSound = (stateChange) => {
        this.setState({
            sound: stateChange
        });
    };

    changeQuote = (stateChange) => {
        this.setState({
            quote: stateChange
        });
    };

    pics = {
        1: ["Hair", "Retrd", "Smile"],
        2: ["Heisann", "Richard stirrer", "Smile"],
        3: ["Gden", "Smile", "Gayden"],
        4: ["Vsaus", "Mikael", "Sup ladies"],
    }

    sounds = {
        1: ["Ueeaa", "Grab pussy", "Church"],
        2: ["Terning ned", "Klikker", "Waves"],
        3: ["Shhh", "Click", "Sup"],
        4: ["Whistle", "Lava", "Blow"],
    }

    quotes = {
        1: ["Joakim", "Halvor", "Adrian"],
        2: ["Terning opp", "Enkelt og greit", "Frickin fresh"],
        3: ["kfm", "knf", "skdf"],
        4: ["kfm", "knf", "skdf"],
    }


    render() {
        return (
            <div className="Wrap">
                <div className="Artboard"><Images activeTab={this.props.activeTab} activePicture={this.state.picture} activeSound={this.state.sound} activeQuote={this.state.quote} /></div>
                <div id="pictures">
                    <h2>Photos:</h2>
                    <label class="container">{this.pics[this.props.activeTab][0]}
                        <input type="checkbox" className="checkbox" name="group 1" onChange={() => this.changePicture(0)} checked />
                        <span class="checkmark"></span>
                    </label><br />

                    <label class="container">{this.pics[this.props.activeTab][1]}
                        <input type="checkbox" className="checkbox" name="group 1" onChange={() => this.changePicture(1)} />
                        <span class="checkmark"></span>
                    </label><br />

                    <label class="container">{this.pics[this.props.activeTab][2]}
                        <input type="checkbox" className="checkbox" name="group 1" onChange={() => this.changePicture(2)}/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div id="sounds">
                    <h2>Sounds:</h2>
                    <label class="container">{this.sounds[this.props.activeTab][0]}
                        <input type="checkbox" className="checkbox" name="group 2" onChange={() => this.changeSound(0)} checked />
                        <span class="checkmark"></span>
                    </label><br />
                    <label class="container">{this.sounds[this.props.activeTab][1]}
                        <input type="checkbox" className="checkbox" name="group 2" onChange={() => this.changeSound(1)} />
                        <span class="checkmark"></span>
                    </label><br />
                    <label class="container">{this.sounds[this.props.activeTab][2]}
                        <input type="checkbox" className="checkbox" name="group 2" onChange={() => this.changeSound(2)} />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div id="quotes">
                    <h2>Quotes:</h2>
                    <label class="container">{this.quotes[this.props.activeTab][0]}
                        <input type="checkbox" className="checkbox" name="group 3" onChange={() => this.changeQuote(0)} checked />
                        <span class="checkmark"></span>
                    </label><br />
                    <label class="container">{this.quotes[this.props.activeTab][1]}
                        <input type="checkbox" className="checkbox" name="group 3" onChange={() => this.changeQuote(1)} />
                        <span class="checkmark"></span>
                    </label><br />
                    <label class="container">{this.quotes[this.props.activeTab][2]}
                        <input type="checkbox" className="checkbox" name="group 3" onChange={() => this.changeQuote(2)} />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Tools;
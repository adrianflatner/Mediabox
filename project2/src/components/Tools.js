import React, { Component } from 'react';
import './Tools.css';
import $ from 'jquery';

class Tools extends Component {

    constructor(props){
        super(props);
        this.state = {
            bar: 1
        }
    }

    componentDidMount(){
        $('input[type="checkbox"]').on('change', function() {
            $('input[name="' + this.name + '"]').not(this).prop('checked', false);
        });
    }

    pics = {
        1: ["Joakim", "Halvor", "Adrian"],
        2: ["H", "if", "kanf", "akfn"],
        3: ["kfm","knf", "skdf", "kanfs"],
    }

    sounds = {
        1: ["Joakim", "Halvor", "Adrian"],
        2: ["H", "if", "kanf", "akfn"],
        3: ["kfm","knf", "skdf", "kanfs"],
    }
    
    quotes = {
        1: ["Joakim", "Halvor", "Adrian"],
        2: ["H", "if", "kanf", "akfn"],
        3: ["kfm","knf", "skdf", "kanfs"],
    }


    render(){
        return(
            <div className="Wrap">
                <div id="pictures">
                    <h2>Photos:</h2>
                    <label class="container">{this.pics[1][0]}
                        <input type="checkbox" className="checkbox" name="group 1"/>
                        <span class="checkmark"></span>
                    </label><br/>
                    
                    <label class="container">{this.pics[2][1]}
                        <input type="checkbox" className="checkbox" name="group 1"/>
                        <span class="checkmark"></span>
                    </label><br/>

                    <label class="container">{this.pics[3][2]}
                        <input type="checkbox" className="checkbox" name="group 1"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div id="sounds">
                    <h2>Sounds:</h2>
                    <label class="container">{this.pics[1][0]}
                        <input type="checkbox" className="checkbox" name="group 2"/>
                        <span class="checkmark"></span>
                    </label><br/>
                    <label class="container">{this.pics[2][1]}
                        <input type="checkbox" className="checkbox" name="group 2"/>
                        <span class="checkmark"></span>
                    </label><br/>
                    <label class="container">{this.pics[3][2]}
                        <input type="checkbox" className="checkbox" name="group 2"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div id="quotes">
                    <h3>Quotes:</h3>
                    <label class="container">One
                        <input type="checkbox" className="checkbox" name="group 3"/>
                        <span class="checkmark"></span>
                    </label><br/>
                    <label class="container">One
                        <input type="checkbox" className="checkbox" name="group 3"/>
                        <span class="checkmark"></span>
                    </label><br/>
                    <label class="container">One
                        <input type="checkbox" className="checkbox" name="group 3"/>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Tools;
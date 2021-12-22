import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import "./logo.css"
import Side_logo from "../IMG/Logo_droite/Side_logo.png"

class Logo extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div id='LogoPEJ'>
                <img id="LogoPEJimg" src={Side_logo}
                />
            </div>
        );
    }
}

export default Logo
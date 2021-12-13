import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Eleven2 extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">Eleven 2</p>
                <div className="video">
                    <ReactPlayer
                        controls="true"
                        className='react-player'
                        url='https://vimeo.com/19432324'
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>A.D.</p>
                        <p>D.O.P</p>
                        <p></p>
                        <p>CAST</p>
                        <p></p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>Maxime Dubois</p>
                        <p>P.E. Joubert</p>
                        <p></p>
                        <p>Zoe Kravitz</p>
                        <p>Ash Stymest</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Eleven2
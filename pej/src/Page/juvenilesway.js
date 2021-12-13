import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class JuvenilesWay extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">juvenilesway</p>
                <div className="video">
                    <ReactPlayer
                        controls="true"
                        className='react-player'
                        url='https://vimeo.com/33402122'
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>Producer</p>
                        <p>D.O.P</p>
                        <p>Commissioner</p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>Benoit Choquet</p>
                        <p>Guillaume Pierre</p>
                        <p>Ismaël Lefeuvre</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default JuvenilesWay
import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './Page/videopage.css'
import "../node_modules/video-react/dist/video-react.css";

class MotionDesign extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">MOTION DESIGN</p>
                <div className="video">
                <ReactPlayer
                    controls="true"
                    className='react-player'
                    url='https://vimeo.com/56594159'
                    height='100%'
                    width='100%'
                />
                </div>
                <div className="videodesc">

                </div>
                <Footer />                                
            </div>
        );
    }
}

export default MotionDesign
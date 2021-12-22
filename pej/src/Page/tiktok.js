import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Tiktok extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">tiktok</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div className="video">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/441180741'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>Produced by</p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>Heko</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tiktok
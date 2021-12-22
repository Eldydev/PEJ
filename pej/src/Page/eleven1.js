import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Eleven1 extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">Eleven 1</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div className="video">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/99788045'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                    </div>
                </div>
                <div style={{
                    marginLeft: "20%",
                    fontSize: "12px",
                    color: "white"
                }}>
                    <p>All shot on kodak 35mm film</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Eleven1
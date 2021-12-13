import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Grieffjoy extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">Grieffjoy</p>
                <div className="videogriefbox">
                    <div className="videogrief">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://www.youtube.com/watch?v=kvOmb2cvtls'
                            height='100%'
                            width='100%'
                        />
                    </div>
                    <div className="videogrief">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/187084943'
                            height='100%'
                            width='100%'
                        />
                    </div>
                    <div className="videogrief">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/187083822'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>

                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>Production</p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>MG Fabre @ premiere heure</p>
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
}

export default Grieffjoy
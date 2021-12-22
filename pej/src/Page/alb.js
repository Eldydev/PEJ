import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Alb extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">ALB // IDIDUDID</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div style={{
                        width: "90%",
                    }}>
                        <div className="video" id="videoalb">
                            <ReactPlayer
                                controls="true"
                                className='react-player'
                                url='https://youtu.be/5FUplp6TSQI'
                                height='100%'
                                width='100%'
                            />
                        </div>
                        <div className="videodesc">
                            <div className="videodescbox1">
                                <p>Directed by</p>
                                <p>Cast</p>
                                <p></p>
                                <p>Producer</p>
                                <p>DOP</p>
                                <p>Steadycam</p>
                                <p>Gaffer</p>
                                <p>Set designer</p>
                                <p>MakeUP</p>
                                <p>Stylist</p>
                            </div>
                            <div className="videodescbox2">
                                <p>P.E. Joubert</p>
                                <p>Dorcas COPPIN</p>
                                <p>Roberto CALVET</p>
                                <p>Jean-Marie ANTONINI</p>
                                <p>Marc ROMANI</p>
                                <p>Thierry THULLIER</p>
                                <p>Dominique DEHOUA</p>
                                <p>Till DUCA</p>
                                <p>Melissa LANDRON</p>
                                <p>Julia RETALI</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Alb
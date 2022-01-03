import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Pgreen extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">Professor green // Remedy</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div className="video">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/41166805'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>Producer</p>
                        <p>D.O.P</p>
                        <p>Editor</p>
                        <p>Commisioner</p>
                        <p>1st AD</p>
                        <p></p>
                        <p>Guests</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>Elliott Tagg</p>
                        <p>Martial Schmeltz</p>
                        <p>Harold Chlewicki</p>
                        <p>James Hackett</p>
                        <p>James Nunn</p>
                        <p></p>
                        <p>Bill Turnbull</p>
                        <p>Millie Mackintosh</p>
                        <p>DJ IQ</p>
                        <p>Dream Mclean</p>
                        <p>Rizzle Kicks</p>
                        <p>Charlotte DeCarle</p>
                        <p>Mellisa Clarke</p>
                        <p>Arabella Drummond</p>
                        <p>El Wood</p>
                        <p>Lucy Vixen</p>
                        <p>Samanah Duran</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Pgreen
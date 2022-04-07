import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Duolingo extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">Duolingo</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div className="video">
                        <ReactPlayer
                            controls="true"
                            className='react-player'
                            url='https://vimeo.com/689364560'
                            height='100%'
                            width='100%'
                        />
                    </div>
                </div>
                <div className="videodesc">
                    <div className="videodescbox1">
                        <p>Agency</p>
                        <p>CD</p>
                        <p>CR</p>
                        <p>AD</p>
                        <p>TV Prod</p>
                        <p>retakes</p>
                        <p>Producer</p>
                        <p>PA</p>
                        <p>Exec Prod</p>
                        <p></p>
                        <p></p>
                        <p>Directed by</p>
                        <p>DOP</p>
                        <p>Stylist</p>
                        <p>Art Director</p>
                        <p>Prost producer</p>
                        <p></p>
                        <p>Colorist</p>
                        <p>Mix</p>
                    </div>
                    <div className="videodescbox2">
                        <p>BETC</p>
                        <p>David Martin</p>
                        <p>Nick Backshi</p>
                        <p>Erika Reyes</p>
                        <p>Coralie Cupillard</p>
                        <p>Leslie Levy</p>
                        <p>Aurélien Drosne @ Voir pictures</p>
                        <p>Ysé Mercury</p>
                        <p>Arthur Morel @ TaProd Bangkok</p>
                        <p>Louis Ditapichai @ TaProd Bangkok</p>
                        <p></p>
                        <p>P.E.Joubert</p>
                        <p>Natdanai Naksuwan</p>
                        <p>Anaïs Cassino & Katae</p>
                        <p>Perb</p>
                        <p>Leila Geslain @General Pop</p>
                        <p></p>
                        <p>Florian Martiny</p>
                        <p>Gum</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Duolingo
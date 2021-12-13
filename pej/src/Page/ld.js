import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import prize1 from "../AddictAid_prize/prize1.webp"
import prize2 from "../AddictAid_prize/prize2.webp"
import prize3 from "../AddictAid_prize/prize3.webp"
import prize4 from "../AddictAid_prize/prize4.webp"
import prize5 from "../AddictAid_prize/prize5.webp"
import prize6 from "../AddictAid_prize/prize6.webp"

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Ld extends Component {
    constructor() {
        super();
        this.state = {
            prize: [
                {
                    img: prize1
                },
                {
                    img: prize2
                },
                {
                    img: prize3
                },
                {
                    img: prize4
                },
                {
                    img: prize5
                },
                {
                    img: prize6
                }
            ]
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">ld</p>
                <div className="video">
                    <ReactPlayer
                        controls="true"
                        className='react-player'
                        url='https://vimeo.com/186116478'
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className="videodesc">
                <div className="videodescbox1">
                        <p>Directed by</p>
                        <p>AGENCY</p>
                        <p>Production</p>
                    </div>
                    <div className="videodescbox2">
                        <p>P.E. Joubert</p>
                        <p>BETC</p>
                        <p>Francine Framboise</p>
                    </div>
                </div>
                <div className="prizebox">
                {this.state.prize.map((data, i) => {
                    return (
                        <div className="prize" 
                            key={i} 
                            >
                            <img src={data.img}/>
                        </div>
                    )
                })}
            </div>
                <Footer />
            </div>
        );
    }
}

export default Ld
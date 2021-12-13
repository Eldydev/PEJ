import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import prize1 from "../Thecube_prize/prize1.webp"
import prize2 from "../Thecube_prize/prize2.webp"
import prize3 from "../Thecube_prize/prize3.webp"
import prize4 from "../Thecube_prize/prize4.webp"
import prize5 from "../Thecube_prize/prize5.webp"
import prize6 from "../Thecube_prize/prize6.webp"
import prize7 from "../Thecube_prize/prize7.webp"
import prize8 from "../Thecube_prize/prize8.webp"

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Cube extends Component {
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
                },
                {
                    img: prize7
                },
                {
                    img: prize8
                }
            ]
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">The cube</p>
                <div className="video">
                    <ReactPlayer
                        controls="true"
                        className='react-player'
                        url='https://vimeo.com/413156437'
                        height='100%'
                        width='100%'
                    />
                </div>
                <div className="videodesc">

                </div>
                <div style={{
                    marginLeft: "20%",
                    fontSize:"12px",
                    color: "white"
                }}>
                    <p>During the 2020 lockdown, I used some </p>
                    <p>time to do this little film.</p>
                    <p>Great cast.</p>
                </div>
                <div className="prizebox">
                {this.state.prize.map((data, i) => {
                    return (
                        <div className="prize prizecube" 
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

export default Cube
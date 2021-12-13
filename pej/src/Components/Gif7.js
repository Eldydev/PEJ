import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import nicolasdelahayeCK from '../GIF_PEJ/Gif7/nicolasdelahayeCK.gif'
import poyzandpirls from '../GIF_PEJ/Gif7/poyzandpirls.gif'
import slimane from '../GIF_PEJ/Gif7/slimane.gif'
import sofiane01 from '../GIF_PEJ/Gif7/sofiane01.gif'
import sosh from '../GIF_PEJ/Gif7/sosh.gif'
import sosh2 from '../GIF_PEJ/Gif7/sosh2.gif'
import tonyfrontal from '../GIF_PEJ/Gif7/tonyfrontal.gif'
import yue from '../GIF_PEJ/Gif7/yue.gif'
import yue2 from '../GIF_PEJ/Gif7/yue2.gif'

import "./Gif.css"

class Gif7 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: nicolasdelahayeCK,
                },
                {
                    img: poyzandpirls,
                },
                {
                    img: slimane,
                },
                {
                    img: sofiane01,
                },
                {
                    img: sosh,
                },
                {
                    img: sosh2,
                },
                {
                    img: tonyfrontal,
                },
                {
                    img: yue,
                },
                {
                    img: yue2,
                },

            ]
        };
    }

    render() {
        return (
            <div className="gifbox">
                {this.state.gif.map((data, i) => {
                    return (
                        <div className="gif" 
                            key={i} 
                            >
                            <img src={data.img}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Gif7
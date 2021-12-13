import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import juveniles from '../GIF_PEJ/Gif6/juveniles.gif'
import katerine from '../GIF_PEJ/Gif6/katerine.gif'
import lacostedjoko from '../GIF_PEJ/Gif6/lacostedjoko.gif'
import maximedubois from '../GIF_PEJ/Gif6/maximedubois.gif'
import melindacelinejulie from '../GIF_PEJ/Gif6/melindacelinejulie.gif'
import melindatriana from '../GIF_PEJ/Gif6/melindatriana.gif'
import melmini03 from '../GIF_PEJ/Gif6/melmini03.gif'
import melsilmesmall02 from '../GIF_PEJ/Gif6/melsilmesmall02.gif'
import monoprix from '../GIF_PEJ/Gif6/monoprix.gif'
import monoprix2 from '../GIF_PEJ/Gif6/monoprix2.gif'
import monoprix3 from '../GIF_PEJ/Gif6/monoprix3.gif'
import morganeColasCK from '../GIF_PEJ/Gif6/morganeColasCK.gif'

import "./Gif.css"

class Gif6 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: juveniles,
                },
                {
                    img: katerine,
                },
                {
                    img: lacostedjoko,
                },
                {
                    img: maximedubois,
                },
                {
                    img: melindacelinejulie,
                },
                {
                    img: melindatriana,
                },
                {
                    img: melmini03,
                },
                {
                    img: melsilmesmall02,
                },
                {
                    img: monoprix,
                },
                {
                    img: monoprix2,
                },
                {
                    img: monoprix3,
                },
                {
                    img: morganeColasCK,
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

export default Gif6
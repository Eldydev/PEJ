import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import alfredsmall02 from '../GIF_PEJ/Gif4/alfredsmall02.gif'
import armani from '../GIF_PEJ/Gif4/armani.gif'
import armani2 from '../GIF_PEJ/Gif4/armani2.gif'
import armani3 from '../GIF_PEJ/Gif4/armani3.gif'
import armani4 from '../GIF_PEJ/Gif4/armani4.gif'
import armani5 from '../GIF_PEJ/Gif4/armani5.gif'
import armani6 from '../GIF_PEJ/Gif4/armani6.gif'
import augustinHauvilleCK from '../GIF_PEJ/Gif4/augustinHauvilleCK.gif'
import benoitchoquet from '../GIF_PEJ/Gif4/benoitchoquet.gif'
import cartier from '../GIF_PEJ/Gif4/cartier.gif'
import clubcheval from '../GIF_PEJ/Gif4/clubcheval.gif'
import craw from '../GIF_PEJ/Gif4/craw.gif'

import "./Gif.css"

class Gif4 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: alfredsmall02,
                },
                {
                    img: armani,
                },
                {
                    img: armani2,
                },
                {
                    img: armani3,
                },
                {
                    img: armani4,
                },
                {
                    img: armani5,
                },
                {
                    img: armani6,
                },
                {
                    img: augustinHauvilleCK,
                },
                {
                    img: benoitchoquet,
                },
                {
                    img: cartier,
                },
                {
                    img: clubcheval,
                },
                {
                    img: craw,
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

export default Gif4
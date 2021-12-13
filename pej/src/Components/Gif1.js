import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import gif1 from '../GIF_PEJ/Gif1/gif1.gif'
import gif01 from '../GIF_PEJ/Gif1/gif01.gif'
import gif2 from '../GIF_PEJ/Gif1/gif2.gif'
import gif04 from '../GIF_PEJ/Gif1/gif04.gif'
import gif05 from '../GIF_PEJ/Gif1/gif05.gif'
import gif8 from '../GIF_PEJ/Gif1/gif8.gif'
import gif08 from '../GIF_PEJ/Gif1/gif08.gif'
import gif9 from '../GIF_PEJ/Gif1/gif9.gif'
import gif09 from '../GIF_PEJ/Gif1/gif09.gif'
import gif10 from '../GIF_PEJ/Gif1/gif10.gif'
import gif12 from '../GIF_PEJ/Gif1/gif12.gif'
import gif13 from '../GIF_PEJ/Gif1/gif13.gif'

import "./Gif.css"

class Gif1 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: gif1,
                },
                {
                    img: gif01,
                },
                {
                    img: gif2,
                },
                {
                    img: gif04,
                },
                {
                    img: gif05,
                },
                {
                    img: gif8,
                },
                {
                    img: gif08,
                },
                {
                    img: gif9,
                },
                {
                    img: gif09,
                },
                {
                    img: gif10,
                },
                {
                    img: gif12,
                },
                {
                    img: gif13,
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

export default Gif1
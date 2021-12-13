import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import gif14 from '../GIF_PEJ/Gif2/gif14.gif'
import gif16 from '../GIF_PEJ/Gif2/gif16.gif'
import gif17 from '../GIF_PEJ/Gif2/gif17.gif'
import gif18 from '../GIF_PEJ/Gif2/gif18.gif'
import gif19 from '../GIF_PEJ/Gif2/gif19.gif'
import gif22 from '../GIF_PEJ/Gif2/gif22.gif'
import gif23 from '../GIF_PEJ/Gif2/gif23.gif'
import gif24 from '../GIF_PEJ/Gif2/gif24.gif'
import gif25 from '../GIF_PEJ/Gif2/gif25.gif'
import gif26 from '../GIF_PEJ/Gif2/gif26.gif'
import gif28 from '../GIF_PEJ/Gif2/gif28.gif'
import gif30 from '../GIF_PEJ/Gif2/gif30.gif'

import "./Gif.css"

class Gif2 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: gif14,
                },
                {
                    img: gif16,
                },
                {
                    img: gif17,
                },
                {
                    img: gif18,
                },
                {
                    img: gif19,
                },
                {
                    img: gif22,
                },
                {
                    img: gif23,
                },
                {
                    img: gif24,
                },
                {
                    img: gif25,
                },
                {
                    img: gif26,
                },
                {
                    img: gif28,
                },
                {
                    img: gif30,
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

export default Gif2
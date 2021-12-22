import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import gif01 from "../Gifs/gif01.gif"
import gif02 from "../Gifs/gif02.gif"
import gif03 from "../Gifs/gif03.gif"
import gif04 from "../Gifs/gif04.gif"
import gif05 from "../Gifs/gif05.gif"
import gif06 from "../Gifs/gif06.gif"
import gif07 from "../Gifs/gif07.gif"
import gif08 from "../Gifs/gif08.gif"
import gif09 from "../Gifs/gif09.gif"
import gif10 from "../Gifs/gif10.gif"
import gif11 from "../Gifs/gif11.gif"
import gif12 from "../Gifs/gif12.gif"
import gif13 from "../Gifs/gif13.gif"
import gif14 from "../Gifs/gif14.gif"
import gif15 from "../Gifs/gif15.gif"
import gif16 from "../Gifs/gif16.gif"
import gif17 from "../Gifs/gif17.gif"
import gif18 from "../Gifs/gif18.gif"
import gif19 from "../Gifs/gif19.gif"
import gif20 from "../Gifs/gif20.gif"
import gif21 from "../Gifs/gif21.gif"
import gif22 from "../Gifs/gif22.gif"
import gif23 from "../Gifs/gif23.gif"

import "./Gif.css"

class GifPEJ extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: gif01,
                },
                {
                    img: gif02,
                },
                {
                    img: gif03,
                },
                {
                    img: gif04,
                },
                {
                    img: gif05,
                },
                {
                    img: gif06,
                },
                {
                    img: gif07,
                },
                {
                    img: gif08,
                },
                {
                    img: gif09,
                },
                {
                    img: gif10,
                },
                {
                    img: gif11,
                },
                {
                    img: gif12,
                },
                {
                    img: gif13,
                },
                {
                    img: gif14,
                },
                {
                    img: gif15,
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
                    img: gif20,
                },
                {
                    img: gif21,
                },
                {
                    img: gif22,
                },
                {
                    img: gif23,
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

export default GifPEJ
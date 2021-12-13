import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import gif31 from '../GIF_PEJ/Gif3/gif31.gif'
import gif36 from '../GIF_PEJ/Gif3/gif36.gif'
import gif37 from '../GIF_PEJ/Gif3/gif37.gif'
import gif44 from '../GIF_PEJ/Gif3/gif44.gif'
import gif51 from '../GIF_PEJ/Gif3/gif51.gif'
import gif65 from '../GIF_PEJ/Gif3/gif65.gif'
import gif71 from '../GIF_PEJ/Gif3/gif71.gif'
import gif88 from '../GIF_PEJ/Gif3/gif88.gif'
import gif116 from '../GIF_PEJ/Gif3/gif116.gif'
import gif149 from '../GIF_PEJ/Gif3/gif149.gif'
import gif233 from '../GIF_PEJ/Gif3/gif233.gif'
import gif254 from '../GIF_PEJ/Gif3/gif254.gif'

import "./Gif.css"

class Gif3 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: gif31,
                },
                {
                    img: gif36,
                },
                {
                    img: gif37,
                },
                {
                    img: gif44,
                },
                {
                    img: gif51,
                },
                {
                    img: gif65,
                },
                {
                    img: gif71,
                },
                {
                    img: gif88,
                },
                {
                    img: gif116,
                },
                {
                    img: gif149,
                },
                {
                    img: gif233,
                },
                {
                    img: gif254,
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

export default Gif3
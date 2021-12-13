import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import edbanger from '../GIF_PEJ/Gif5/edbanger.gif'
import edbanger2 from '../GIF_PEJ/Gif5/edbanger2.gif'
import elevenparis from '../GIF_PEJ/Gif5/elevenparis.gif'
import elevenparis2 from '../GIF_PEJ/Gif5/elevenparis2.gif'
import elevenparis3 from '../GIF_PEJ/Gif5/elevenparis3.gif'
import elevenparis4 from '../GIF_PEJ/Gif5/elevenparis4.gif'
import elevenparis5 from '../GIF_PEJ/Gif5/elevenparis5.gif'
import elevenparis6 from '../GIF_PEJ/Gif5/elevenparis6.gif'
import hindaergolnaz from '../GIF_PEJ/Gif5/hindaergolnaz.gif'
import juliendobrowolski from '../GIF_PEJ/Gif5/juliendobrowolski.gif'
import julienshoessmall from '../GIF_PEJ/Gif5/julienshoessmall.gif'
import jump from '../GIF_PEJ/Gif5/jump.gif'

import "./Gif.css"

class Gif5 extends Component {
    constructor() {
        super();
        this.state = {
            gif: [
                {
                    img: edbanger,
                },
                {
                    img: edbanger2,
                },
                {
                    img: elevenparis,
                },
                {
                    img: elevenparis2,
                },
                {
                    img: elevenparis3,
                },
                {
                    img: elevenparis4,
                },
                {
                    img: elevenparis5,
                },
                {
                    img: elevenparis6,
                },
                {
                    img: hindaergolnaz,
                },
                {
                    img: juliendobrowolski,
                },
                {
                    img: julienshoessmall,
                },
                {
                    img: jump,
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

export default Gif5
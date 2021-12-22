import React, { Component } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Logo from './Components/Logo';
import Gif1 from './Components/Gif1';
import Gif2 from './Components/Gif2';
import Gif3 from './Components/Gif3';
import Gif4 from './Components/Gif4';
import Gif5 from './Components/Gif5';
import Gif6 from './Components/Gif6';
import Gif7 from './Components/Gif7';
import GifPEJ from './Components/GifPEJ';


class Gif extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <GifPEJ />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Gif
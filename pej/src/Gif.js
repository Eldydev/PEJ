import React, { Component } from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Gif1 from './Components/Gif1';
import Gif2 from './Components/Gif2';
import Gif3 from './Components/Gif3';
import Gif4 from './Components/Gif4';
import Gif5 from './Components/Gif5';
import Gif6 from './Components/Gif6';
import Gif7 from './Components/Gif7';


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
                <Gif1 />
                <Gif2 />
                <Gif3 />
                <Gif4 />
                <Gif5 />
                <Gif6 />
                <Gif7 />
                <Footer />
            </div>
        );
    }
}

export default Gif
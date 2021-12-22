import React, { Component } from 'react';
import Miniatures from './Components/Miniatures';
import Videos from './Components/Videos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Logo from './Components/Logo';


class Director extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <Videos />
                <Footer />
            </div>
        );
    }
}

export default Director
import React, { Component } from 'react';
import Miniatures from './Components/Miniatures';
import Videos from './Components/Videos';
import Header from './Components/Header';
import Footer from './Components/Footer';


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
                <Miniatures />
                <Footer />
            </div>
        );
    }
}

export default Director
import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import Header from './Components/Header';
import Videos from './Components/Videos';
import Owner from './Components/Owner';
import Footer from './Components/Footer'
import VisibilitySensor from "react-visibility-sensor";

import './Home.css';


class Home extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div id="blackscreen">
                </div>
                <Owner />
                <div className="EnterButton">
                    <Link
                        to={{
                            pathname: '/director'
                        }}
                    >
                        <button>ENTRER</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home
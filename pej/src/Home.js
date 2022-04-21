import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import Header from './Components/Header';
import Videos from './Components/Videos';
import Owner from './Components/Owner';
import Logo from './Components/Logo';
import Footer from './Components/Footer'
import VisibilitySensor from "react-visibility-sensor";
import Enter from './IMG/Enter.png'

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
                <Logo />
                <div id="blackscreen">
                </div>
                <div className="EnterButton">
                    <Link
                        to={{
                            pathname: '/director'
                        }}
                    >
                        <img
                            style={{
                                width: "200px"
                            }}
                            src={Enter} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home
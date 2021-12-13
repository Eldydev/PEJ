import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import logo_insta_black from '../IMG/logo_insta_black.png'
import logo_vimeo_black from '../IMG/logo_vimeo_black.png'
import './Footer.css';


class Footer extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div id="footer">
                <a
                    href="https://www.instagram.com/p.e.joubert/" >
                    <img className='logo' src={logo_insta_black}/>    
                </a>
                <a
                    href="https://vimeo.com/pejoubert" >
                    <img  className='logo' src={logo_vimeo_black}/>   
                </a>
            </div>
        );
    }
}

export default Footer
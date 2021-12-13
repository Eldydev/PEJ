import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";
import logo_insta_black from '../IMG/logo_insta_black.png'
import logo_vimeo_black from '../IMG/logo_vimeo_black.png'
import './ContactPopup.css';


class ContactPopup extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div id="Popup">
                <div className="PopupMessage">
                    <p>MAIL ENVOYE</p>
                    <Link
                        to={{
                            pathname: '/director'
                        }}
                    >
                    <button>OK</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ContactPopup
import React, { Component } from 'react';
import Header from '.././Components/Header';
import Footer from '.././Components/Footer';
import Logo from '../Components/Logo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';

import './videopage.css'
import "../../node_modules/video-react/dist/video-react.css";

class Agaag extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Header />
                <p className="videotitle">A GIRL & A GUN</p>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Logo />
                    <div style={{
                            width: "90%",
                        }}>
                        <p className="subvideotitle">Teaser</p>
                        <div className="video" id="videoagaag">
                            <ReactPlayer
                                controls="true"
                                className='react-player'
                                url='https://vimeo.com/440828751'
                                height='100%'
                                width='90%'
                            />
                        </div>
                        <p className="subvideotitle">Film</p>
                        <div className="video" id="videoagaag2">
                            <ReactPlayer
                                controls="true"
                                className='react-player'
                                url='https://vimeo.com/437125120'
                                height='100%'
                                width='90%'
                            />
                        </div>
                        
                    </div>

                </div>
                <div className="videodesc">
                            <div className="videodescbox1">
                                <p>Directed by</p>
                                <p>Anna</p>
                                <p>Alex</p>
                                <p>Frank</p>
                                <p>Ben</p>
                                <p>Sound ingineer</p>
                                <p></p>
                                <p>Written by</p>
                                <p></p>
                                <p>producer</p>
                                <p>line producer</p>
                                <p>Production Manager</p>
                                <p></p>
                                <p>Casting Director</p>
                                <p>D.O.P</p>
                                <p>Steadycam Operator</p>
                                <p></p>
                                <p>1st AC</p>
                                <p>2nd AC</p>
                                <p>Key grip</p>
                                <p>Best Boy Grip</p>
                                <p>Audio engineer</p>
                                <p>Makeup/hair Stylist</p>
                                <p>Costume Designer</p>
                                <p>Truck PA</p>
                                <p></p>
                                <p>Editing</p>
                                <p>Blood VFX</p>
                                <p>Color Grading</p>
                                <p></p>
                                <p>music</p>
                                <p><br /></p>
                                <p></p>
                                <p>mix</p>
                                <p>poster </p>
                            </div>
                            <div className="videodescbox2">
                                <p>P.E. Joubert</p>
                                <p>Olivia Buckle</p>
                                <p>Anand Mahalingam</p>
                                <p>Michael Gantz</p>
                                <p>Stephen Schlager</p>
                                <p>Michael J. Sielaff</p>
                                <p></p>
                                <p>P.E. Joubert</p>
                                <p>Gautier renault</p>
                                <p>Aurelien Drosne</p>
                                <p>Alex D. Sanchez</p>
                                <p>Julia Brauner</p>
                                <p></p>
                                <p>Michael Beaudry</p>
                                <p>Sophian Belgarbi</p>
                                <p>Quaid Cde Baca</p>
                                <p>Sam law</p>
                                <p>Scott Peragine</p>
                                <p>Keiry Vera</p>
                                <p>Valentin Salembier</p>
                                <p>Michael Rosner Hyman</p>
                                <p>John E. Walker</p>
                                <p>Erica Medina</p>
                                <p>Sarah Kinsumba</p>
                                <p>Josh Williams</p>
                                <p></p>
                                <p>romain boileau</p>
                                <p>Benjamin le talour</p>
                                <p>Jerome brechet</p>
                                <p>mc murphy</p>
                                <p>Raphaël stuart</p>
                                <p>tristan stuart</p>
                                <p>ACM STUDIO</p>
                                <p>Dang Khoa Chau</p>
                                <p>JB stephan </p>
                            </div>
                        </div>
                        <div style={{
                            marginLeft: "20%",
                            fontSize: "12px",
                            marginTop: "50px",
                            color: "white"
                        }}>
                            <p>special thanks to :</p>
                            <p>Mc murphy, Chano Hills, Antagonist Camera, First Run Rentals, Blok M Casting, Oseku Lighting, Zio </p>
                            <p>Rentals, The Production Truck, Hand Prop Room, Charles Bussienne, Nick Bakshi, stéphanie </p>
                            <p>huguenin, john hamon, fulvia musolino.</p>
                        </div>
                <Footer />
            </div>
        );
    }
}

export default Agaag
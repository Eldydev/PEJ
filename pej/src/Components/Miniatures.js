import React, { Component } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';

import adidas_image from ".././Cover/adidas_image.jpg"
import agaag_image from ".././Cover/agaag_image.jpg"
import alb_image from ".././Cover/alb_image.jpg"
import cil_image from ".././Cover/cil_image.jpg"
import eleven_image from ".././Cover/eleven_image.jpg"
import griefjoy_image from ".././Cover/griefjoy_image.jpg"
import hanoi_image from ".././Cover/hanoi_image.jpg"
import ilek_image from ".././Cover/ilek_image.jpg"
import juveniles_image from ".././Cover/juveniles_image.jpg"
import juveniles_tour_image from ".././Cover/juveniles_tour_image.jpg"
import ld_image from ".././Cover/ld_image.jpg"
import mineao_image from ".././Cover/mineao_image.jpg"
import pgreen_image from ".././Cover/pgreen_image.jpg"
import richards_image from ".././Cover/richards_image.jpg"
import the_cube_image from ".././Cover/the_cube_image.jpg"
import tiktok_image from ".././Cover/tiktok_image.jpg"
import underworld_image from ".././Cover/underworld_image.jpg"
import zoe_image from ".././Cover/zoe_image.jpg"

import "./Miniature.css"






class Miniatures extends Component {
    constructor() {
        super();
        this.state = {
            miniatures: [
                {
                    id: "prev1",
                    img: adidas_image,
                    url: "/adidas",
                    title: "ADIDAS // DRAXLER",
                    desc: "DIGITAL CONTENT"
                },
                {
                    id: "prev2",
                    img: agaag_image,
                    url: "/agirlandagun",
                    title: "A GIRL & A GUN",
                    desc: "SHORT FILM"
                },
                {
                    id: "prev3",
                    img: alb_image,
                    url: "/alb",
                    title: "ALB // IDIDUDID",
                    desc: "MUSIC VIDEO"
                },
                {
                    id: "prev4",
                    img: cil_image,
                    url: "/cil",
                    title: "CURFEW IN LOWPOLYVILLE",
                    desc: "DIGITAL CONTENT"

                },
                {
                    id: "prev5",
                    img: the_cube_image,
                    url: "/thecube",
                    title: "THE CUBE",
                    desc: "SHORT SHORT FILM"
                },
                {
                    id: "prev6",
                    img: eleven_image,
                    url: "/eleven1",
                    title: "ELEVEN PARIS // FW14",
                    desc: "DIGITAL CONTENT"
                },
                {
                    id: "prev7",
                    img: zoe_image,
                    url: "/eleven2",
                    title: "ELEVEN PARIS // ZOE KRAVITZ",
                    desc: "DIGITAL CONTENT"
                },
                {
                    id: "prev8",
                    img: richards_image,
                    url: "/eleven3",
                    title: "ELEBEN PARIS // TEASER",
                    desc: "DIGITAL CONTENT"
                },
                {
                    id: "prev9",
                    img: griefjoy_image,
                    url: "/griefjoy",
                    title: "GRIEFJOY // MIX",
                    desc: "MIX"
                },
                {
                    id: "prev10",
                    img: hanoi_image,
                    url: "/hanoi",
                    title: "HANOI // VIETNAM",
                    desc: "MUSIC VIDEO"
                },
                {
                    id: "prev11",
                    img: ilek_image,
                    url: "/ilek",
                    title: "ILEK",
                    desc: "COMMERCIAL"
                },
                {
                    id: "prev12",
                    img: juveniles_tour_image,
                    url: "/juvenilestour",
                    title: "JUVENILES // BLACKOUT",
                    desc: "TOUR VIDEO"
                },
                {
                    id: "prev13",
                    img: juveniles_image,
                    url: "/juvenilesway",
                    title: "JUVENILES // WE ARE YOUNG",
                    desc: "MUSIC VIDEO"
                },
                {
                    id: "prev14",
                    img: ld_image,
                    url: "/ld",
                    title: "ADDICT' AID",
                    desc: "COMMMERCIAL"
                },
                {
                    id: "prev15",
                    img: mineao_image,
                    url: "/mineo",
                    title: "MINEO // TURN OUT THE LIGHT",
                    desc: "MUSIC VIDEO"
                },
                {
                    id: "prev16",
                    img: pgreen_image,
                    url: "/pgreen",
                    title: "PROFESSOR GREEN // REMEDY",
                    desc: "MUSIC VIDEO"
                },
                {
                    id: "prev17",
                    img: tiktok_image,
                    url: "/tiktok",
                    title: "TIKTOK // DANCE",
                    desc: "DIGITAL"
                },
                {
                    id: "prev18",
                    img: underworld_image,
                    url: "/underworld",
                    title: "UNDERWORLD // ALWAYS LOVED A FILM",
                    desc: "MUSIC VIDEO"
                },
            ]
        };
    }

    render() {
        return (
            <div className="miniaturesbox">
                {this.state.miniatures.map((data, i) => {
                    return (
                        <div className="miniatures" 
                            key={i} 
                            id={data.id} 
                            >
                            <a href={data.url}>  
                            <img src={data.img}/>
                            <div className="miniaturestitle">
                            <p style={{
                                fontWeight: "bold"
                            }}>{data.title}</p>
                            <p>{data.desc}</p>
                            </div>
                            </a>  
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Miniatures
import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from "react-player"
import { Player, ControlBar, BigPlayButton } from 'video-react';
import { useLocation, Link, useHistory } from "react-router-dom";

import extrait_adidas from ".././Preview/extrait_adidas.mp4"
import extrait_agaag from ".././Preview/extrait_agaag.mp4"
import extrait_alb from ".././Preview/extrait_alb.mp4"
import extrait_cil from ".././Preview/extrait_cil.mp4"
import extrait_cube from ".././Preview/extrait_cube.mp4"
import extrait_eleven01 from ".././Preview/extrait_eleven01.mp4"
import extrait_eleven02 from ".././Preview/extrait_eleven02.mp4"
import extrait_eleven03 from ".././Preview/extrait_eleven03.mp4"
import extrait_grieffjoy from ".././Preview/extrait_grieffjoy.mp4"
import extrait_hanoi from ".././Preview/extrait_hanoi.mp4"
import extrait_ilek from ".././Preview/extrait_ilek.mp4"
import extrait_Juvenilestour from ".././Preview/extrait_Juvenilestour.mp4"
import extrait_Juvenilesway from ".././Preview/extrait_Juvenilesway.mp4"
import extrait_ld from ".././Preview/extrait_ld.mp4"
import extrait_mineo from ".././Preview/extrait_mineo.mp4"
import extrait_pgreen from ".././Preview/extrait_pgreen.mp4"
import extrait_tiktok from ".././Preview/extrait_tiktok.mp4"
import extrait_underworld from ".././Preview/extrait_underworld.mp4"

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


import './video.css';
import "../../node_modules/video-react/dist/video-react.css";




class Videos extends Component {
    constructor() {
        super();
        this.state = {
            videos: [
                {
                    id: "prev1",
                    src: extrait_adidas,
                    img: adidas_image,
                    url: "/adidas"
                },
                {
                    id: "prev2",
                    src: extrait_agaag,
                    img: agaag_image,
                    url: "/agirlandagun"
                },
                {
                    id: "prev3",
                    src: extrait_alb,
                    img: alb_image,
                    url: "/alb"
                },
                {
                    id: "prev4",
                    src: extrait_cil,
                    img: cil_image,
                    url: "/cil"

                },
                {
                    id: "prev5",
                    src: extrait_cube,
                    img: the_cube_image,
                    url: "/thecube"
                },
                {
                    id: "prev6",
                    src: extrait_eleven01,
                    img: eleven_image,
                    url: "/eleven1"
                },
                {
                    id: "prev7",
                    src: extrait_eleven02,
                    img: "",
                    url: "/eleven2"
                },
                {
                    id: "prev8",
                    src: extrait_eleven03,
                    img: "",
                    url: "/eleven3"
                },
                {
                    id: "prev9",
                    src: extrait_grieffjoy,
                    img: griefjoy_image,
                    url: "/griefjoy"
                },
                {
                    id: "prev10",
                    src: extrait_hanoi,
                    img: hanoi_image,
                    url: "/hanoi"
                },
                {
                    id: "prev11",
                    src: extrait_ilek,
                    img: ilek_image,
                    url: "/ilek"
                },
                {
                    id: "prev12",
                    src: extrait_Juvenilestour,
                    img: juveniles_tour_image,
                    url: "/juvenilestour"
                },
                {
                    id: "prev13",
                    src: extrait_Juvenilesway,
                    img: juveniles_image,
                    url: "/juvenilesway"
                },
                {
                    id: "prev14",
                    src: extrait_ld,
                    img: ld_image,
                    url: "/ld"
                },
                {
                    id: "prev15",
                    src: extrait_mineo,
                    img: mineao_image,
                    url: "/mineo"
                },
                {
                    id: "prev16",
                    src: extrait_pgreen,
                    img: pgreen_image,
                    url: "/pgreen"
                },
                {
                    id: "prev17",
                    src: extrait_tiktok,
                    img: tiktok_image,
                    url: "/tiktok"
                },
                {
                    id: "prev18",
                    src: extrait_underworld,
                    img: underworld_image,
                    url: "/underworld"
                },
            ],
            VideoPlay: false
        };
    }

    componentWillUnmount() {
        React.initializeTouchEvents(true);
    }

    PlayVideo(id) {
        var video = document.getElementById(id).children[0].children[0]
        console.log(id)
        video.play()
    }
    StopVideo(id) {
        var video = document.getElementById(id).children[0].children[0]
        console.log("out :" + id )
        video.pause()
        video.load()
    }

    handleTouchStart(id) {
        var VideoPlay = this.state.VideoPlay
        if(VideoPlay === false) {
            var video = document.getElementById(id).children[0].children[0]
            console.log("in :" + id )
            console.log("handletouchstart" )
            video.play()
            this.setState({VideoPlay:true})
        }
        if (VideoPlay === true) {
            var video = document.getElementById(id).children[0].children[0]
            console.log("out :" + id )
            console.log("handletouchend" )
            video.pause()
            video.load()
            this.setState({VideoPlay:false})
        }
 
    }

    render() {
        return (
            <div className="videobox">
                {this.state.videos.map((data, i) => {
                    return (
                        <div className="homevideo" 
                            key={i} 
                            id={data.id}
                            onMouseEnter={e => this.PlayVideo(data.id)}
                            onMouseLeave={e => this.StopVideo(data.id)}
                            onTouchStart={e => this.handleTouchStart(data.id) }
                            
                            >
                            <Player
                                fluid
                                src={data.src}
                                loop="true"
                                poster={data.img}
                                >
                                <ControlBar autoHide={false} className="controlbar"/>
                                <BigPlayButton position="center" className="playbutton" />
                            </Player>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Videos
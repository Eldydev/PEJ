import React, { Component } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from "react-player";
import { Redirect } from 'react-router'
import { Player, ControlBar, BigPlayButton } from 'video-react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import Hammer from "rc-hammerjs";

import Logo from './Logo';

import EXTRAITADIDAS from "../Extraits/EXTRAITADIDAS.mp4"
import EXTRAITAGAAG from "../Extraits/EXTRAITAGAAG.mp4"
import EXTRAITALB from "../Extraits/EXTRAITALB.mp4"
import EXTRAITCIL from "../Extraits/EXTRAITCIL.mp4"
import EXTRAITCUBE from "../Extraits/EXTRAITCUBE.mp4"
import EXTRAITELEVEN01 from "../Extraits/EXTRAITELEVEN01.mp4"
import EXTRAITGRIEFJOY from "../Extraits/EXTRAITGRIEFJOY.mp4"
import EXTRAITILEK from "../Extraits/EXTRAITILEK.mp4"
import EXTRAITJuvenilesWAY from "../Extraits/EXTRAITJuvenilesWAY.mp4"
import EXTRAITLD from "../Extraits/EXTRAITLD.mp4"
import EXTRAITMINEO from "../Extraits/EXTRAITMINEO.mp4"
import EXTRAITPGREEN from "../Extraits/EXTRAITPGREEN.mp4"
import EXTRAITTIKTOK from "../Extraits/EXTRAITTIKTOK.mp4"
import EXTRAITUNDERWORLD from "../Extraits/EXTRAITUNDERWORLD.mp4"

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
                    src: EXTRAITADIDAS,
                    img: adidas_image,
                    url: "/adidas"
                },
                {
                    id: "prev2",
                    src: EXTRAITAGAAG,
                    img: agaag_image,
                    url: "/agirlandagun"
                },
                {
                    id: "prev3",
                    src: EXTRAITALB,
                    img: alb_image,
                    url: "/alb"
                },
                {
                    id: "prev4",
                    src: EXTRAITCIL,
                    img: cil_image,
                    url: "/cil"

                },
                {
                    id: "prev5",
                    src: EXTRAITCUBE,
                    img: the_cube_image,
                    url: "/thecube"
                },
                {
                    id: "prev6",
                    src: EXTRAITELEVEN01,
                    img: eleven_image,
                    url: "/eleven1"
                },
                {
                    id: "prev9",
                    src: EXTRAITGRIEFJOY,
                    img: griefjoy_image,
                    url: "/griefjoy"
                },
                {
                    id: "prev11",
                    src: EXTRAITILEK,
                    img: ilek_image,
                    url: "/ilek"
                },
                {
                    id: "prev13",
                    src: EXTRAITJuvenilesWAY,
                    img: juveniles_image,
                    url: "/juvenilesway"
                },
                {
                    id: "prev14",
                    src: EXTRAITLD,
                    img: ld_image,
                    url: "/ld"
                },
                {
                    id: "prev15",
                    src: EXTRAITMINEO,
                    img: mineao_image,
                    url: "/mineo"
                },
                {
                    id: "prev16",
                    src: EXTRAITPGREEN,
                    img: pgreen_image,
                    url: "/pgreen"
                },
                {
                    id: "prev17",
                    src: EXTRAITTIKTOK,
                    img: tiktok_image,
                    url: "/tiktok"
                },
                {
                    id: "prev18",
                    src: EXTRAITUNDERWORLD,
                    img: underworld_image,
                    url: "/underworld"
                },
            ],
            VideoPlay: false,
            with: 0,
            height: 0,
            redirect: false,
            url: ""
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    PlayVideo(id) {
        var video = document.getElementById(id).children[0].children[0].children[0]
        console.log(id)
        video.play()
    }
    StopVideo(id) {
        var video = document.getElementById(id).children[0].children[0].children[0]
        console.log("out :" + id)
        video.pause()
        video.load()
    }

    handleTouchStart(id) {
        var VideoPlay = this.state.VideoPlay
        if (VideoPlay === false) {
            var video = document.getElementById(id).children[0].children[0].children[0]
            console.log("in :" + id)
            console.log("handletouchstart")
            video.play()
            this.setState({ VideoPlay: true })
        }
        if (VideoPlay === true) {
            var video = document.getElementById(id).children[0].children[0].children[0]
            console.log("out :" + id)
            console.log("handletouchend")
            video.pause()
            video.load()
            this.setState({ url: "" })
            this.setState({ VideoPlay: false })
        }

    }

    GotoVideoPage(url) {
        this.props.history.push(url)
    }

    handleTap(id) {
        console.log('tap')
        var VideoPlay = this.state.VideoPlay
        if (VideoPlay === false) {
            var video = document.getElementById(id).children[0].children[0]
            console.log("in :" + id)
            console.log("handletouchstart")
            video.play()
            this.setState({ VideoPlay: true })
        }
        if (VideoPlay === true) {
            var video = document.getElementById(id).children[0].children[0]
            console.log("out :" + id)
            console.log("handletouchend")
            video.pause()
            video.load()
            this.setState({ VideoPlay: false })
        }
    }

    handleDoubleTap(url) {
        console.log('doubletap', url);
        this.setState({ url: url })
        this.setState({ redirect: true })
    }

    render() {
        console.log('width :', this.state.width, 'height  :', this.state.height)
        if (this.state.redirect === true) {
            return <Redirect to={this.state.url} />;
        }
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <Logo />
                <div className="videobox">
                    {this.state.videos.map((data, i) => {
                        if (this.state.width < 500) {
                            return (
                                <div className="homevideo"
                                    key={i}
                                    id={data.id}

                                >
                                    <Hammer
                                        onTap={e => this.handleTap(data.id)}
                                        onDoubleTap={e => this.handleDoubleTap(data.url)}>
                                        <Player
                                            fluid
                                            src={data.src}
                                            loop={true}
                                            poster={data.img}
                                        >
                                            <ControlBar autoHide={false} className="controlbar" />
                                            <BigPlayButton position="center" className="playbutton" />
                                        </Player>
                                    </Hammer>
                                </div>
                            )

                        }
                        else {
                            return (
                                <div className="homevideo"
                                    key={i}
                                    id={data.id}

                                    onMouseEnter={e => this.PlayVideo(data.id)}
                                    onMouseLeave={e => this.StopVideo(data.id)}
                                >
                                    <a href={data.url}>
                                        <Player
                                            fluid
                                            src={data.src}
                                            loop={true}
                                            poster={data.img}
                                        >
                                            <ControlBar autoHide={false} className="controlbar" />
                                            <BigPlayButton position="center" className="playbutton" />
                                        </Player>
                                    </a>
                                </div>

                            )
                        }

                    })}
                </div>
            </div>
        );
    }
}

export default Videos
import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import menu_icon_black from "../IMG/menu_icon_black.png"
import cross_icon_black from "../IMG/cross_icon_black.png"
import Contact01 from "../IMG/Menu/Contact01.png"
import Contact02 from "../IMG/Menu/Contact02.png"
import Director01 from "../IMG/Menu/Director01.png"
import Director02 from "../IMG/Menu/Director02.png"
import Gif01 from "../IMG/Menu/Gif01.png"
import Gif02 from "../IMG/Menu/Gif02.png"
import Menu from "../IMG/Menu/Menu.png"
import Motion01 from "../IMG/Menu/Motion01.png"
import Motion02 from "../IMG/Menu/Motion02.png"
import "./Header.css"

class Header extends Component {
  constructor() {
    super();
    this.state = {
      gif: Gif01,
      director: Director01,
      motion: Motion01,
      contact: Contact01,
      loc: ""
    };
  }

  componentDidMount() {
    var loc = window.location.pathname
    this.setState({loc: loc})
    console.log("loc : ", loc )
    if (loc === '/director'){
      this.setState({ director: Director02 })
    }
    if (loc === '/gif'){
      this.setState({ gif: Gif02 })
    }
    if (loc === '/motiondesign'){
      this.setState({ motion: Motion02 })
    }
    if (loc === '/contact'){
      this.setState({ contact: Contact02 })
    }
}

  MenuDisplay() {
    var menu = document.getElementById("linkdiv")
    menu.style.display = "flex"

  }

  MenuDisplayNone() {
    var menu = document.getElementById("linkdiv")
    menu.style.display = "none"
  }

  RolloverGif() {
    
    var loc = this.state.loc
    if (loc != '/gif'){
      this.setState({ gif: Gif02 })
    }
  }

  RolloverGif2() {
    var loc = this.state.loc
    if (loc != '/gif'){
      this.setState({ gif: Gif01 })
    }
  }

  RolloverDirector() {
    var loc = this.state.loc
    if (loc != '/director'){
      this.setState({ director: Director02 })
    }
  }

  RolloverDirector2() {
    var loc = this.state.loc
    if (loc != '/director'){
      this.setState({ director: Director01 })
    }
  }

  RolloverContact() {
    var loc = this.state.loc
    if (loc != '/contact'){
      this.setState({ contact: Contact02 })
    }
  }

  RolloverContact2() {
    var loc = this.state.loc
    if (loc != '/contact'){
      this.setState({ contact: Contact01 })
    }
  }

  RolloverMotion() {
    var loc = this.state.loc
    if (loc != '/motiondesign'){
      this.setState({ motion: Motion02 })
    } 
  }

  RolloverMotion2() {
    var loc = this.state.loc
    if (loc != '/motiondesign'){
      this.setState({ motion: Motion01 })
    }
  }


  render() {
    return (
      <div id="header">
        <div id="linkdiv">
          <img className="menucross" src={cross_icon_black} onClick={(e) => this.MenuDisplayNone()} />
          <Link className='link' id="director"
            to={{
              pathname: '/director'
            }}
          >
            <img className='Menuimg' src={this.state.director}
              onMouseEnter={e => this.RolloverDirector()}
              onMouseLeave={e => this.RolloverDirector2()}
            />
          </Link>
          <Link className='link' id="gif"
            to={{
              pathname: '/gif'
            }}
          >
            <img className='Menuimg' src={this.state.gif}
              onMouseEnter={e => this.RolloverGif()}
              onMouseLeave={e => this.RolloverGif2()}
            />
          </Link>
          <Link className='link' id="motion"
            to={{
              pathname: '/motiondesign'
            }}
          >
            <img className='Menuimg' src={this.state.motion}
              onMouseEnter={e => this.RolloverMotion()}
              onMouseLeave={e => this.RolloverMotion2()}
            />
          </Link>
          <Link className='link' id="contact"
            to={{
              pathname: '/contact'
            }}
          >
            <img className='Menuimg' src={this.state.contact}
              onMouseEnter={e => this.RolloverContact()}
              onMouseLeave={e => this.RolloverContact2()}
            />
          </Link>
        </div>
        <img className="logomenu" onClick={(e) => this.MenuDisplay()} src={menu_icon_black} />
      </div>
    );
  }
}

export default Header

/*<div className ="HeaderOwner">
<p className="HeaderName">PIERRE EDOUARD JOUBERT</p>
<p className="HeaderTitle">DIRECTOR</p>
</div>*/
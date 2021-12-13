import React, { Component } from 'react';
import { useLocation, Link } from "react-router-dom";

import menu_icon_black from "../IMG/menu_icon_black.png"
import cross_icon_black from "../IMG/cross_icon_black.png"
import "./Header.css"

class Header extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  MenuDisplay () {
    var menu = document.getElementById("linkdiv")
    menu.style.display ="flex"
    
  }

  MenuDisplayNone () {
    var menu = document.getElementById("linkdiv")
    menu.style.display = "none"    
  }


  render() {
    return (
      <div id="header">
        <div className ="HeaderOwner">
          <p className="HeaderName">PIERRE EDOUARD JOUBERT</p>
          <p className="HeaderTitle">CINEMATOGRAPHER</p>
        </div>
        <div id="linkdiv">
          <img className="menucross" src={cross_icon_black} onClick={(e) => this.MenuDisplayNone()}/>
          <Link
            to={{
              pathname: '/director'
            }}
          >
            <p className="link">DIRECTOR</p>
          </Link>
          <Link
            to={{
              pathname: '/gif'
            }}
          >
            <p className="link">GIF</p>
          </Link>
          <Link
            to={{
              pathname: '/motiondesign'
            }}
          >
            <p className="link">MOTION DESIGN</p>
          </Link>
          <Link
            to={{
              pathname: '/contact'
            }}
          >
            <p className="link">CONTACT</p>
          </Link>
        </div>
        <img className="logomenu" onClick={(e) => this.MenuDisplay()} src={menu_icon_black} />
      </div>
    );
  }
}

export default Header
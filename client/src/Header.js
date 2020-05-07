import React from 'react';
import * as Scroll from 'react-scroll';
import {Link, Element , Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';
import logo from "./images/logo.png";
import mp4 from "./video/674118136.mp4";
import ogv from "./video/674118136.ogv";
import webm from "./video/674118136.webm";

const Header = () => {
    return (
        <div className="main">
        <div className="page-header">         
                <a href="/" className="logo">
                    <img src={logo} alt="" className="logo-img"/>
                </a>
                <nav className="page-nav">
                    <ul className="page-nav-list">
                        <li>HOME PAGE</li>
                        <Link
                         activeClass="active"
                         to="courses"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration= {500}
                        ><li>COURSES</li></Link>
                        <Link
                         activeClass="active"
                         to="instructors"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration= {500}
                        ><li>ABOUT US</li></Link>
                        <Link
                         activeClass="active"
                         to="contact"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration= {500}
                        ><li>CONTACT</li></Link>
                    </ul>
                </nav>         
        </div>

        <div className="header-content">
            <h1>Code Masters</h1>
            <div class="header-content-line"></div>
            <div className='main-text'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est explicabo facilis</p>
                <p>odio eaque quae dolorum reprehenderit ducimus consequuntur excepturi et?</p>
            </div>
            <a href="" className='main-btn'>Dowiedz się więcej</a>
        </div>

        <div className="main-bottom-bar">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	             viewBox="0 0 260 50" style={{enableBackground: "new 0 0 260 50"}} preserveAspectRatio="none" xmlSpace="preserve">
               <style type="text/css">
               
                </style>
                <path className="st0" style={{fill:"white"}} d="M213.9,0c-40.6,0-48.9,27-82.1,27c-1.3,0-2.3,0-3.1,0C95.5,27,87.2,0,46.6,0C26.3,0,0.5,0,0,0v50h260V0
                   C260,0,234.2,0,213.9,0z"/>
            </svg>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
        </div>


        <div className="main-video">
            <div className="main-hero-video">
                <video width="100%" height="100%" autoPlay buffered='true' loop preload='true' muted>
                    <source src={mp4} type="video/mp4"/>
                    <source src={ogv} type="video/ogv"/>
                    <source src={webm} type="video/webm"/>
                </video>
            </div>
        </div>
        <div className="main-background"></div>
    </div>
    )
}

export default Header;

import React from 'react'
import Toggler from '../Toggler/Toggler'
import "./Navbar.css"
import { Link } from 'react-scroll'

export const Navbar = () => {
  return (
    <div className="navWrapper">
        <div className="navLeft">
            <div className="name">Arun Manikandan</div>
            <Toggler />
        </div>
        <div className="navRight">
            <div className="navList">
                <ul>
                    <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to="Services" smooth={true}>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to="Experience" smooth={true}>
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to="Works" smooth={true}>
                    <li>Works</li>
                    </Link>
                    <Link spy={true} to="Portfolio" smooth={true}>
                    <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <button className="gButton navButton">Contact Me</button>
        </div>
    </div>
  )
}
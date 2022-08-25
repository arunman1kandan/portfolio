import React from 'react'
import Toggler from '../Toggler/Toggler'
import "./Navbar.css"

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
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Works</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <button className="gButton navButton">Contact Me</button>
        </div>
    </div>
  )
}
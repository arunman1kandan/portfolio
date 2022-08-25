import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navWrapper">
        <div className="navLeft">
            <div className="name">Arun Manikandan</div>
            <span>Toggle Night mode</span>
        </div>
        <div className="navRight">
            <div className="navList">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <button className="gButton navButton">Contact Me</button>
        </div>
    </div>
  )
}
import React from 'react'
import "./Footer.css"
import Wave from "../../Images/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Face from "@iconscout/react-unicons/icons/uil-facebook"
import Git from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footerWrapper">
        <img src={Wave} alt="" style ={{width:"100%"}}/>
        <div className="footerContent">
            <span>arunm291003@gamil.com</span>
            <div className="icons">
                <Insta color="white" size="3rem"/>
                <Face color="white" size="3rem" />
                <Git color="white" size="3rem"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
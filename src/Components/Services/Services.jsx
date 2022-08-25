import React from 'react'
import './Services.css'
import Glass from "../../Images/glasses.png"
import Heart from "../../Images/heartemoji.png"
import Divine from "../../Images/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"
import {motion} from "framer-motion"


const Services = () => {
    const transition = {duration : 1, type:"spring"}
  return (
    <div className="servicesWrapper">
        <div className="servicesLeft">
            <span>What do I </span>
            <span>DO?</span>
            <span>I am a software developer and a part-time full-stack web developer
            </span>
            <a href={Resume} download>
                <button className="gButton servicesButton">Download Resume</button>
            </a>
            <div className="blur servicesBlur" style={{background : "#ABF1FF94"}}></div>
        </div>

        <div className="servicesRight">
            <motion.div initial={{left:"25%"}} whileInView={{left : "14rem"}} transition={transition} style={{left : "14rem"}}>
                <Card
                emoji={Heart}
                pText={"Design"}
                sText={"Figma, PhotoShop, CorelDraw, Adobe After Effects"}/>
            </motion.div>

            <motion.div initial={{left:"-20rem"}} whileInView={{left:"-4rem"}} transition={transition} style={{top : "12rem" , left : "-4rem"}}>
                <Card
                emoji={Glass}
                pText={"Developer"}
                sText={"HTML, CSS, Js, MERN-Stack"} / >
            </motion.div>

            <motion.div initial={{left:"-10rem"}} whileInView={{left : "12rem"}} transition={transition} style={{top : "19rem" , left : "12rem"}}>
                <Card 
                emoji={Divine}
                pText={"Software Dev"}
                sText={"Python, C++, C, Java"}/>
            </motion.div>
            <div className="blur servicesBlur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
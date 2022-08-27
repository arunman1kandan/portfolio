import React from 'react'
import './Services.css'
import Glass from "../../Images/glasses.png"
import Heart from "../../Images/heartemoji.png"
import Divine from "../../Images/humble.png"
import Card from '../Card/Card'
import Resume from "./Resume.pdf"
import {motion} from "framer-motion"
import {themeContext} from "../../ThemeChanger"
import {useContext} from "react"


const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const transition = {duration : 1, type:"spring"}
  return (
    <div className="servicesWrapper" id ="Services">
        <div className="servicesLeft">
            <span style={{color : darkMode ? "white": " "}}>What do I </span>
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
            <div className="blur servicesBlur2" style={{background: "var(--purple)" ,zIndex : darkMode? "auto" : "" , top:"0rem" , left : "25rem"}}></div>
            <div className="blur servicesBlur2" style={{background: "#6EA0AA" ,zIndex : darkMode? "auto" : "" , top:"20rem" , left : "-35rem"}}></div>
        </div>
    </div>
  )
}

export default Services
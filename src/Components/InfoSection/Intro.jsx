import React from 'react'
import "./Intro.css"
import Git from "../../Images/github.png"
import LinkedIn from "../../Images/linkedin.png"
import Insta from "../../Images/instagram.png"
import V1 from "../../Images/V1.png"
import V2 from "../../Images/V2.png"
import Up from "../../Images/thumbup.png"
import Crown from "../../Images/crown.png"
import cool from "../../Images/glassesimoji.png"
import Person from "../../Images/P1.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {motion} from "framer-motion"


const Intro = () => {

  const transition = {duration : 2 , type:"spring"}
  return (
    <div className="introWrapper">
        <div className="introLeft">
            <div className="introName">
                <span>Hello There! I am</span>
                <span>Arun Manikandan</span>
                <span>FullStack MERN Developer with intermediate experience in web designing.<br/>Full-time programmer and software developer.
                </span>
                
            </div>
            <button className="gButton introButton">Hire Me</button>
            <div className="introIcons">
              <img src={Git} alt="GitHub" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Insta} alt="Instagram" />
            </div>
        </div>
        <div className="introRight">
            <img src={V1} alt="GitHub" />
            <img src={V2} alt="GitHub" />
            <img src={Person} alt="GitHub" />
            <motion.img initial={{left : "-36%"}} whileInView={{left:"-24%"}} transition={transition} src={cool} alt="emoji1" />
            <motion.div initial={{top : "-4%" ,left: "74%"}} whileInView={{left:"68%"}} transition={transition} style={{top:"-4%" , left : "68%"}}>
              <FloatingDiv image={Crown} txt1 = 'Web' txt2="Developer"/>
            </motion.div>
            <motion.div initial={{left:  "9rem", top:"18rem"}} whileInView={{left : "0rem"}} transition={transition} style={{top : "18rem" , left : "0rem"}}>
              <FloatingDiv image={Up} txt1 ="Software" txt2="Developer"/>
            </motion.div>

            <div className='blur' style={{background : "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background : "#99e3f1" , top : "17rem" , width : "21rem" , height : "11rem" , left : "-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro;
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


const Intro = () => {
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
            <img src={cool} alt="emoji1" />
            <div style={{top:"-4%" , left : "68%"}}>
              <FloatingDiv image={Crown} txt1 = 'Web' txt2="Developer"/>
            </div>
            <div style={{top : "18rem" , left : "0rem"}}>
              <FloatingDiv image={Up} txt1 ="Software" txt2="Developer"/>
            </div>

            <div className='blur' style={{background : "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background : "#99e3f1" , top : "17rem" , width : "21rem" , height : "11rem" , left : "-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro;
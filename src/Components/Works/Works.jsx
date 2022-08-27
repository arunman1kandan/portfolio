import React from 'react'
import "./Works.css"
import UpWork  from "../../Images/Upwork.png"
import Fiverr from "../../Images/fiverr.png"
import Amazon from "../../Images/amazon.png"
import Shopify from "../../Images/Shopify.png"
import Facebook from "../../Images/Facebook.png"
import {motion} from "framer-motion"
import {themeContext} from "../../ThemeChanger"
import {useContext} from "react"


const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works" id = "Works">
        <div className="servicesLeft">
            <span style={{color : darkMode? "white" : ""}}>Got Clients from all these</span>
            <span>Companies!</span>
            <span>
            </span>
            <button className="gButton servicesButton">Hire ME</button>
            <div className="blur servicesBlur" style={{background : "#ABF1FF94" ,zIndex : darkMode? "auto" : "",left:"-20rem"}}></div>
            <div className="blur servicesBlur" style={{background : "rgb(238 210 255)" ,zIndex : darkMode? "auto" : "",top : "05rem",left:"30rem"}}></div>
        </div>

        <div className="worksRight">
            <motion.div
            initial={{rotate : 45}}
            whileInView={{rotate:0}}
            viewport={{margin:"-40px"}}
            transition={{duration:3.5 , type:"spring"}}
            className="mainCircle" >
                <div className="secondCircle" style={{border : darkMode? "2.5px solid var(--orange)" : ""}}>
                    <img src={Fiverr} alt="Fiverr" />
                </div>
                <div className="secondCircle" style={{border : darkMode? "2.5px solid var(--orange)" : ""}}>
                    <img src={UpWork} alt="UpWork" />
                </div>
                <div className="secondCircle" style={{border : darkMode? "2.5px solid var(--orange)" : ""}}>
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className="secondCircle" style={{border : darkMode? "2.5px solid var(--orange)" : ""}}>
                    <img src={Shopify} alt="Shopify" />
                </div>
                <div className="secondCircle" style={{border : darkMode? "2.5px solid var(--orange)" : ""}}>
                    <img src={Facebook} alt="Facebook" />
                </div>
            </motion.div>
            <div className="backCircle blue" ></div>
            <div className="backCircle yellow"></div>
        </div>
    </div>
  )
}

export default Works
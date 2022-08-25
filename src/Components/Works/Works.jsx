import React from 'react'
import "./Works.css"
import UpWork  from "../../Images/Upwork.png"
import Fiverr from "../../Images/fiverr.png"
import Amazon from "../../Images/amazon.png"
import Shopify from "../../Images/Shopify.png"
import Facebook from "../../Images/Facebook.png"
import {motion} from "framer-motion"

const Works = () => {
  return (
    <div className="works">
        <div className="servicesLeft">
            <span>Got Clients from all these</span>
            <span>Companies!</span>
            <span>
            </span>
            <button className="gButton servicesButton">Hire ME</button>
            <div className="blur servicesBlur" style={{background : "#ABF1FF94"}}></div>
        </div>

        <div className="worksRight">
            <motion.div
            initial={{rotate : 45}}
            whileInView={{rotate:0}}
            viewport={{margin:"-40px"}}
            transition={{duration:3.5 , type:"spring"}}
            className="mainCircle">
                <div className="secondCircle">
                    <img src={Fiverr} alt="Fiverr" />
                </div>
                <div className="secondCircle">
                    <img src={UpWork} alt="UpWork" />
                </div>
                <div className="secondCircle">
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className="secondCircle">
                    <img src={Shopify} alt="Shopify" />
                </div>
                <div className="secondCircle">
                    <img src={Facebook} alt="Facebook" />
                </div>
            </motion.div>
            <div className="backCircle blue"></div>
            <div className="backCircle yellow"></div>
        </div>
    </div>
  )
}

export default Works
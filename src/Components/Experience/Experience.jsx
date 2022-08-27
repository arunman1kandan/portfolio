import React from 'react'
import "./Experience.css"
import {themeContext} from "../../ThemeChanger"
import {useContext} from "react"

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id = "Experience">
        <div className="acheivements">
            <div className="circle" style={{position : darkMode? "sticky" : ""}}>8+ </div>
            <span>Years </span>
            <span>Experience </span>
        </div>
        <div className="acheivements" style={{marginLeft : "2rem"}}>
            <div className="circle"  style={{position : darkMode? "sticky" : ""}}>20+ </div>
            <span>Completed </span>
            <span>Projects </span>
        </div>
        <div className="acheivements">
            <div className="circle"  style={{position : darkMode? "sticky" : ""}}>6+</div>
            <span>Programming Languages</span>
            <span>Known </span>
        </div>
    </div>
  )
}

export default Experience
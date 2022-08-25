import React from 'react'
import "./Experience.css"

const Experience = () => {
  return (
    <div className="experience">
        <div className="acheivements">
            <div className="circle">8+ </div>
            <span>Years </span>
            <span>Experience </span>
        </div>
        <div className="acheivements" style={{marginLeft : "2rem"}}>
            <div className="circle">20+ </div>
            <span>Completed </span>
            <span>Projects </span>
        </div>
        <div className="acheivements">
            <div className="circle">6+</div>
            <span>Programming Languages</span>
            <span>Known </span>
        </div>
    </div>
  )
}

export default Experience
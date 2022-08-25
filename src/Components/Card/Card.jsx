import React from 'react'
import "./Card.css"

const Card = ({emoji,pText,sText}) => {
  return (
    <div className="card">
        <img src={emoji} alt="emo1" />
        <span>{pText}</span>
        <span>{sText}</span>
        <button className="cardButton">Learn More</button>

    </div>
  )
}

export default Card
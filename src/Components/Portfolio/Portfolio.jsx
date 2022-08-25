import React from 'react'
import "./Portfolio.css"
import {Swiper ,SwiperSlide} from "swiper/react"
import Grammered from "../../Images/grammered.jpg"
import ESSE from "../../Images/Group 2.jpg"
import Music from "../../Images/musicapp.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className="portfolioWrapper">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/*Slider*/}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolioWrapper-slider">
            <SwiperSlide>
                <img src={Grammered} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ESSE} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Music} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio